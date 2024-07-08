import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Logout from './Logout';


const TaskManager = () => {
  const [filter, setFilter] = useState('All');
 
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Task Manager</h1>
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
      <Logout />
    </div>
  );
};

export default TaskManager;
