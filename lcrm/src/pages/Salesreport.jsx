import './Salesreport.css';
import { useState } from 'react';

function SalesReport() {
  const [filter, setFilter] = useState('fecha');

  const salesData = [
    { cliente: 'Juan Pérez', producto: 'Zapatos', vendedor: 'Ana', fecha: '2025-04-15', total: '$120' },
    { cliente: 'Laura Gómez', producto: 'Bolso', vendedor: 'Carlos', fecha: '2025-04-18', total: '$80' },
    { cliente: 'Mario Ruiz', producto: 'Camisa', vendedor: 'Ana', fecha: '2025-04-20', total: '$45' },
  ];

  return (
    <div className="report-container">
      <h2>Informe de Ventas</h2>

      {/* Filtro */}
      <div className="filter-container">
        <label htmlFor="filter">Filtrar por:</label>
        <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="fecha">Fecha</option>
          <option value="vendedor">Vendedor</option>
          <option value="producto">Producto</option>
        </select>
      </div>

      {/* Tabla de Ventas */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Vendedor</th>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{sale.cliente}</td>
              <td>{sale.producto}</td>
              <td>{sale.vendedor}</td>
              <td>{sale.fecha}</td>
              <td>{sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botones de exportación */}
      <div className="export-buttons">
        <button onClick={() => alert('Exportar a PDF')}>Exportar PDF</button>
        <button onClick={() => alert('Exportar a Excel')}>Exportar Excel</button>
      </div>
    </div>
  );
}

export default SalesReport;
