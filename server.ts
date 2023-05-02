import fs from 'node:fs/promises';
import express from 'express';
import { ViteDevServer } from 'vite';

const port = process.env.PORT || 3000;

const isProd = process.env.NODE_ENV === 'production';

const templateHtml = isProd ? fs.readFile('./dist/client/index.html', 'utf-8') : '';

const app = express();

let vite: ViteDevServer;
if (!isProd) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base: '/',
  });
  app.use(vite.middlewares);
} else {
  app.use((await import('compression')).default());
  app.use(
    (await import('serve-static')).default('./dist/client', {
      index: false,
    })
  );
}

app.use('*', async (req: express.Request, res: express.Response) => {
  try {
    const url = req.originalUrl.replace('/', '');

    let template: string;
    template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);

    const html = template.split('<!--app-html-->');

    res.write(html[0]);
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const stream = render(req.url, {
      onShellReady() {
        res.status(200);
        stream.pipe(res);
      },
      onShellError() {
        res.status(500);
        res.send('<h1>Something went wrong</h1>');
      },
      onAllReady() {
        res.status(200);
        res.write(html[1]);
        res.send();
      },
      onError(err: Error) {
        console.error(err);
      },
    });
  } catch (e) {
    vite?.ssrFixStacktrace(e as Error);
    console.log((e as Error).stack);
    res.status(500).end((e as Error).stack);
  }
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
