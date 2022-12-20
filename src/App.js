import './App.css';
import React, { useContext, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Template from './views/template';

const Index = lazy(()=> import ('./views/index')) 
const Zodiac = lazy(()=> import ('./views/zodiac'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          <Route path="/" element={<Template children={<Index />} />} />
          <Route path="/horoscopo/:name/:day" element={<Template children={<Zodiac />} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
