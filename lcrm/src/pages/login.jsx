import './login.css';

function Login() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="********" />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;