import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in:', { email, password });
    } else {
      console.log('Signing up:', { email, password });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="form-container">
          <h2>{isLogin ? 'Login' : 'Signup'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button className="toggle-button" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Signup' : 'Login'}
            </button>
          </p>
        </div>

      </header>
    </div>
  );
}

export default App;
