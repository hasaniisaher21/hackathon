import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // new state for login success
  const [currentPage, setCurrentPage] = useState('dashboard');    // dashboard, orders, staff, consolidation

  // Form fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in:', { email, password });
    } else {
      console.log('Signing up:', { name, mobile, location, email, password });
    }
    setIsAuthenticated(true); // After login/signup, go to dashboard
  };

  const renderLoginSignupForm = () => (
    <div className="form-container">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter your Mobile No"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </>
        )}

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
  );

  const renderDashboard = () => (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={() => setCurrentPage('orders')}>Create Orders</button>
      <button onClick={() => setCurrentPage('staff')}>Staff Queue</button>
      <button onClick={() => setCurrentPage('consolidation')}>Consolidation</button>
    </div>
  );

  const renderOrdersPage = () => (
    <div className="page-container">
      <h2>Create Order</h2>
      {/* Later we'll add full order form */}
      <button onClick={() => setCurrentPage('dashboard')}>Back to Dashboard</button>
    </div>
  );

  const renderStaffPage = () => (
    <div className="page-container">
      <h2>Staff Queue</h2>
      {/* Later we'll add queue listing */}
      <button onClick={() => setCurrentPage('dashboard')}>Back to Dashboard</button>
    </div>
  );

  const renderConsolidationPage = () => (
    <div className="page-container">
      <h2>Consolidation</h2>
      {/* Later we'll add consolidation management */}
      <button onClick={() => setCurrentPage('dashboard')}>Back to Dashboard</button>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        {!isAuthenticated ? (
          renderLoginSignupForm()
        ) : (
          <>
            {currentPage === 'dashboard' && renderDashboard()}
            {currentPage === 'orders' && renderOrdersPage()}
            {currentPage === 'staff' && renderStaffPage()}
            {currentPage === 'consolidation' && renderConsolidationPage()}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
