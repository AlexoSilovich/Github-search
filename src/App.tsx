import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { FavouritsPage } from './pages/FavouritsPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favourites' element={<FavouritsPage />} />
      </Routes>
    </>
  );
}

export default App;
