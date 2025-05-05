import './login.css';

function Login({ setIsLoggedIn }) {
  const handleLogin = (e) => {
    e.preventDefault();
    // Simular autenticación
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    
    <div className="login-container">
  <form className="login-form" onSubmit={handleLogin}>
    <h2>Iniciar Sesión</h2>
    <input type="text" placeholder="Usuario" required />
    <input type="password" placeholder="Contraseña" required />
    <button type="submit">Entrar</button>
  </form>
</div>
  );
}

export default Login;
