import React, { useState } from 'react';

function Signup({ goToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    location: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // API call can be added here
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-container">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            /><br />

            <input
              type="text"
              name="mobile"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleChange}
              required
            /><br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />

            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            /><br />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            /><br />

            <button type="submit">Signup</button>
          </form>
          <p>Already have an account? <span onClick={goToLogin} style={{ color: '#00bfff', cursor: 'pointer' }}>Login</span></p>
        </div>
      </header>
    </div>
  );
}

export default Signup;
