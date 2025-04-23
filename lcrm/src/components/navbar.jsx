import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>LCRM</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clients">Clientes</Link></li>
        <li><Link to="/sales">Ventas</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;