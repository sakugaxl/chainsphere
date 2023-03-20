import React, { useState } from 'react';

const LoginPage = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        // Redirect to the desired page after successful login
      } else {
        // Handle errors, show a message to the user
      }
    } catch (error) {
      // Handle network errors
    }
  };

  return (
    <div className="w-96 dark-eth-card p-6 rounded-md shadow-md">
      <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl">&times;</button>
      <h1 className="text-2xl mb-4 text-white">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
