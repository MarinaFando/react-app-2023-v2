import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import Notfoundpage from './pages/NotfoundPage/Notfoundpage';
import Header from './components/Header';
import FormsLayout from './components/FormsLayout/FormsLayout';

export interface Sneaker {
  id: string;
  parentId: number | string;
  title: string;
  price: number;
  imageUrl: string;
}

type Sneakers = {
  items: Sneaker[];
};
class App extends React.Component {
  state: Sneakers = {
    items: [
      {
        id: '7',
        parentId: '6',
        title: 'Sneaker Black Edition',
        price: 118,
        imageUrl: 'img/sneakers/6.svg',
      },
      {
        id: '9',
        parentId: '5',
        title: 'Sneaker Future Rider',
        price: 139,
        imageUrl: 'img/sneakers/5.svg',
      },
      {
        id: '10',
        parentId: 3,
        title: 'Sneaker Nike Blazer Mid Suede',
        price: 164,
        imageUrl: 'img/sneakers/3.svg',
      },
      {
        id: '11',
        parentId: 4,
        title: 'Sneaker Puma X Aka Boku Future Rider',
        price: 123,
        imageUrl: 'img/sneakers/4.svg',
      },
      {
        id: '12',
        parentId: 1,
        title: 'Sneaker Nike Blazer Mid Suede',
        price: 100,
        imageUrl: 'img/sneakers/1.svg',
      },
      {
        id: '13',
        parentId: 4,
        title: 'Sneaker Puma X Aka Boku Future Rider',
        price: 123,
        imageUrl: 'img/sneakers/4.svg',
      },
      {
        id: '16',
        parentId: 4,
        title: 'Sneaker Puma X Aka Boku Future Rider',
        price: 123,
        imageUrl: 'img/sneakers/3.svg',
      },
      {
        id: '18',
        parentId: 4,
        title: 'Sneaker Puma X Aka Boku Future Rider',
        price: 123,
        imageUrl: 'img/sneakers/1.svg',
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage items={this.state.items} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/form" element={<FormsLayout />} />
          <Route path="/404" element={<Notfoundpage />} />
          <Route path="/*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    );
  }
}

export default App;
