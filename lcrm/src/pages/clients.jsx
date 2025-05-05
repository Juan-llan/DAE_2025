import { useEffect, useState } from 'react';
import './Clients.css';

function Clients() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Cargar datos desde localStorage o precargados
  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients')) || [
      { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
      { id: 2, name: 'Ana Gómez', email: 'ana@example.com' },
    ];
    setClients(storedClients);
  }, []);

  // Guardar en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  // Validar y agregar cliente
  const handleAddClient = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim() || !email.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Formato de email no válido.');
      return;
    }

    const newClient = {
      id: Date.now(),
      name,
      email,
    };

    setClients([...clients, newClient]);
    setName('');
    setEmail('');
    setSuccess('Cliente agregado exitosamente.');
  };

  // Eliminar cliente
  const handleDelete = (id) => {
    if (confirm('¿Seguro que deseas eliminar este cliente?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  return (
    <div className="clients-container">
      <h2>Gestión de Clientes</h2>

      <form className="client-form" onSubmit={handleAddClient}>
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Agregar Cliente</button>
      </form>

      {error && <p className="error-msg">{error}</p>}
      {success && <p className="success-msg">{success}</p>}

      <div className="clients-list">
        <h3>Lista de Clientes</h3>
        {clients.length === 0 ? (
          <p>No hay clientes registrados.</p>
        ) : (
          <ul>
            {clients.map(client => (
              <li key={client.id}>
                <strong>{client.name}</strong> - {client.email}
                <button onClick={() => handleDelete(client.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Clients;
  