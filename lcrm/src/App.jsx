import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import Login from './pages/Login';
import SalesReport from './pages/Salesreport';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <h1>LCRM</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sales">Ventas</Link></li>
            <li><Link to="/clients">Clientes</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/salesreport">Informe de Ventas</Link></li>
          </ul>
        </nav>

        {/* Rutas */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/login" element={<Login />} />
            <Route path="/salesreport" element={<SalesReport />} />
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
