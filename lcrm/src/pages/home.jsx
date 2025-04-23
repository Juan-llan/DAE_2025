import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Dashboard General</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total de Ventas</h3>
          <p>$12,340</p>
        </div>
        <div className="card">
          <h3>Clientes Registrados</h3>
          <p>128</p>
        </div>
        <div className="card">
          <h3>Ventas del Mes</h3>
          <p>$4,560</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
