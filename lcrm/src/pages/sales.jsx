// Mejora y recomendaciones sobre funcionalidades

// 1. CLIENTES - Mejoras sugeridas
// --- Funcionalidad actual: Crear, Ver y Eliminar clientes con validación básica
// --- Mejora sugerida:
// Agregar la funcionalidad de "Editar cliente" y evitar duplicados por email

// Fragmento sugerido para agregar en Clients.js
const handleEdit = (id) => {
  const clientToEdit = clients.find((c) => c.id === id);
  if (clientToEdit) {
    setName(clientToEdit.name);
    setEmail(clientToEdit.email);
    // Eliminar temporalmente para evitar conflicto de ID
    setClients(clients.filter((c) => c.id !== id));
  }
};

// En el botón de lista:
<button onClick={() => handleEdit(client.id)}>Editar</button>

// También agregar validación para evitar correos duplicados:
if (clients.some(c => c.email === email)) {
  setError('Este correo ya está registrado.');
  return;
}

// 2. VENTAS (SalesReport) - Mejoras sugeridas
// --- Funcionalidad actual: Crear, Ver y Eliminar ventas con validaciones
// --- Mejora sugerida:
// - Mostrar resumen total de ventas
// - Validar formato numérico en el campo total
// - Confirmar eliminación

// Fragmento para validar total:
if (isNaN(parseFloat(formData.total))) {
  alert('El total debe ser un número.');
  return;
}

// Fragmento para resumen total:
const totalVentas = sales.reduce((acc, venta) => acc + parseFloat(venta.total || 0), 0);

// Mostrar en pantalla:
<p><strong>Total vendido:</strong> ${totalVentas.toFixed(2)}</p>

// 3. SALES (Página sin funcionalidades)
// --- Mejora sugerida:
// Mostrar últimas ventas (reutilizando localStorage) y resumen

import { useEffect, useState } from 'react';

function Sales() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ventas')) || [];
    setVentas(data);
  }, []);

  return (
    <div className="sales-container">
      <h2>Resumen de Ventas</h2>
      <p>Total ventas registradas: {ventas.length}</p>
      <ul>
        {ventas.slice(-5).reverse().map((v, idx) => (
          <li key={idx}>
            <strong>{v.cliente}</strong> compró <em>{v.producto}</em> por ${v.total} el {v.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sales;
