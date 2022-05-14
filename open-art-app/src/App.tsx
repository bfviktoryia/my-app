import React from 'react';
import Header from './components/header/Header';

import './App.css';
import GalleryCards from './components/cards/GalleryCards';
import Navbar from './components/header/navigation/Navbar';


function App() {
  return (
    <div className="app">
          <Header>
            <Navbar/>
          </Header>    
      <div className="app-body">
        <GalleryCards/>
      </div>
    </div>
  );
}

export default App;
