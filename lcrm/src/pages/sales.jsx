
import './Sales.css'; 
import { useEffect, useState } from 'react';
function Sales() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ventas')) || [];
    setVentas(data);
  }, []);

  // Calcular total vendido
  const totalVentas = ventas.reduce(
    (acc, venta) => acc + parseFloat(venta.total || 0),
    0
  );

  return (
    <div className="sales-container">
      <h2>Resumen de Ventas</h2>
      <p>Total ventas registradas: {ventas.length}</p>
      <p><strong>Total vendido:</strong> ${totalVentas.toFixed(2)}</p>

      <h3>Últimas 5 ventas</h3>
      {ventas.length === 0 ? (
        <p>No hay ventas registradas.</p>
      ) : (
        <ul>
          {ventas.slice(-5).reverse().map((v, idx) => (
            <li key={idx}>
              <strong>{v.cliente}</strong> compró <em>{v.producto}</em> por <strong>${v.total}</strong> el {v.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Sales;
