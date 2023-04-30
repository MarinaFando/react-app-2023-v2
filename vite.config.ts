import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    includeSource: ['.src/**/*.tsx'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      all: true,
    },
  },
  build: {
    minify: false,
  },
});
