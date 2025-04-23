import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Sales from './pages/sales';
import Login from './pages/Login';
import Clients from './pages/clients';
import React from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sales">Sales</Link></li>
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;