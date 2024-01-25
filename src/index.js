import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Links from './pages/Links';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Links />} />
        <Route path='/links' element={<Links />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
