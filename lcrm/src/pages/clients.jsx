import './Clients.css';

function Clients() {
  return (
    <div className="clients-container">
      <h2>Clientes</h2>

      <table className="clients-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Total Compras</th>
            <th>Última Compra</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juan Pérez</td>
            <td>juan@email.com</td>
            <td>$530</td>
            <td>12/04/2025</td>
          </tr>
          <tr>
            <td>Laura Gómez</td>
            <td>laura@email.com</td>
            <td>$1,250</td>
            <td>10/04/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Clients;