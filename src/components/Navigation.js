import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => navigate('/login')}
        className="mr-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
      <button
        onClick={() => navigate('/register')}
        className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Register
      </button>
    </div>
  );
};

export default Navigation;
