import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import About from './pages/Aboutus.jsx'
import Application from './pages/Application.jsx'
import Schemes from './pages/Schemes.jsx'
import Resources from './pages/Resources.jsx'
import Network from './pages/network.jsx';
import Home from './pages/home.jsx';
import './i18.js'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/application" element={<Application />} />
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/resources" element={<Resources/>} />
        <Route path="/network" element={<Network/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);