import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/header/navigation/Navbar';
import CardsGallery from './components/cardsGallery/CardsGallery';
import CardPage from './components/cardPage/CardPage';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Favourite from './components/favourite/FavouritePage';

import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
             <Header>
                   <Navbar/>
             </Header>    
             <div className="app-body">
                <Routes>
                  <Route path="/gallery" >
                        <Route index element={<CardsGallery/>} />
                        <Route path=":id" element={<CardPage/>} />
                  </Route>  
                  <Route path="/favourite" element={<Favourite/>}/> 
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/registration" element={<Registration/>}/>
                  <Route path="*" element={<Navigate to={"/gallery"}/>} />    
                </Routes>
             </div>
        </div>
      </BrowserRouter> 
  );
}

export default App;