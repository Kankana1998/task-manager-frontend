import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/tasks');
    } catch (error) {
      setLoginFailed(true);
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
      {loginFailed && (
        <div className="mt-4 text-center">
          <p className="text-red-500">Login failed. Please check your credentials.</p>
          <button
            onClick={() => navigate('/register')}
            className="mt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Register
          </button>
          <button
            onClick={() => setLoginFailed(false)}
            className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      )}
      {!loginFailed && (
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate('/register')}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
