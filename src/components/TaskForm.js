import React, { useState } from 'react';
import { addTask } from '../firebase/firestore';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask({ title, description, status });
      alert('Task added successfully!');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Task</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title:</label>
        <input
          type="text"
          id="title"
          className="mt-1 p-2 w-full border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">Description:</label>
        <textarea
          id="description"
          className="mt-1 p-2 w-full border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700">Status:</label>
        <select
          id="status"
          className="mt-1 p-2 w-full border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Add Task</button>
    </form>
  );
};

export default TaskForm;
