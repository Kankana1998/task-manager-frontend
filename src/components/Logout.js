import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../firebase/auth';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex justify-center mb-6 mr-4 pt-2">
       <button onClick={handleLogout} className=" max-w-md bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" >
      Logout
    </button>
    </div>
    
  );
};

export default Logout;
