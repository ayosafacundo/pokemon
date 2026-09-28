import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/Main.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import NotFoundPage from "./pages/notfoundpage";*/
import CardView from './pages/CardView.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const links = [
  {
    name: "Pokédex",
    path: "/pokemon/"
  }
]

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar links={links} />
      <Routes>
        <Route path="/pokemon/" element={<CardView />} />
        { /* <Route path="/about/" element={<About />} /> */}
        <Route path="*" element={<CardView />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);