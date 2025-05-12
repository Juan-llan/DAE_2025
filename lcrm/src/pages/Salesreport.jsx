import './Salesreport.css';
import { useEffect, useState } from 'react';

function SalesReport() {
  const [sales, setSales] = useState([]);
  const [formData, setFormData] = useState({
    cliente: '',
    producto: '',
    vendedor: '',
    fecha: '',
    total: ''
  });

  // Cargar ventas desde localStorage al iniciar
  useEffect(() => {
    const savedSales = JSON.parse(localStorage.getItem('ventas')) || [];
    setSales(savedSales);
  }, []);

  // Guardar ventas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('ventas', JSON.stringify(sales));
  }, [sales]);

  // Manejar cambio en formulario
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  // Crear nueva venta
  const handleSubmit = (e) => {
    e.preventDefault();
    setSales([...sales, formData]);
    setFormData({ cliente: '', producto: '', vendedor: '', fecha: '', total: '' });
  };

  // Eliminar venta por índice
  const handleDelete = (index) => {
    const updated = sales.filter((_, i) => i !== index);
    setSales(updated);
  };

  return (
    <div className="report-container">
      <h2>Informe de Ventas (Simulado)</h2>

      {/* Formulario para crear nueva venta */}
      <form className="sales-form" onSubmit={handleSubmit}>
        <input type="text" name="cliente" placeholder="Cliente" value={formData.cliente} onChange={handleChange} required />
        <input type="text" name="producto" placeholder="Producto" value={formData.producto} onChange={handleChange} required />
        <input type="text" name="vendedor" placeholder="Vendedor" value={formData.vendedor} onChange={handleChange} required />
        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
        <input type="text" name="total" placeholder="Total" value={formData.total} onChange={handleChange} required />
        <button type="submit">Agregar Venta</button>
      </form>

      {/* Tabla de ventas */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Producto</th>
            <th>Vendedor</th>
            <th>Fecha</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.cliente}</td>
              <td>{sale.producto}</td>
              <td>{sale.vendedor}</td>
              <td>{sale.fecha}</td>
              <td>{sale.total}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SalesReport;

