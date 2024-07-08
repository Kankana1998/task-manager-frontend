import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { logout } from '../firebase/auth';

const TaskManager = () => {
  const [filter, setFilter] = useState('All');
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
    <div className="container mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Manager</h1>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>
      <div className="flex justify-center mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <TaskForm />
      <TaskList filter={filter} />
    </div>
  );
};

export default TaskManager;
