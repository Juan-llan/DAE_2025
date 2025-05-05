import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/home';
import Sales from './pages/sales';
import Clients from './pages/clients';
import Login from './pages/login';
import SalesReport from './pages/Salesreport';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Leer estado de login desde localStorage al iniciar
  useEffect(() => {
    const logged = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(logged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <h1>LCRM</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
            {isLoggedIn && (
              <>
                <li><Link to="/sales">Ventas</Link></li>
                <li><Link to="/clients">Clientes</Link></li>
                <li><Link to="/sales-report">Reportes</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </nav>

        {/* Rutas */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Login solo si NO está logueado */}
            <Route 
              path="/login" 
              element={!isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )}
            />

            {/* Rutas protegidas */}
            {isLoggedIn && (
              <>
                <Route path="/sales" element={<Sales />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/sales-report" element={<SalesReport />} />
              </>
            )}

            {/* Redirección genérica si no está logueado */}
            {!isLoggedIn && (
              <>
                <Route path="/sales" element={<Navigate to="/" />} />
                <Route path="/clients" element={<Navigate to="/" />} />
                <Route path="/sales-report" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
