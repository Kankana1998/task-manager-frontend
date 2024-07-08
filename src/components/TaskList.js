import React, { useState, useEffect } from 'react';
import { getTasks, updateTaskStatus, deleteTask } from '../firebase/firestore';

const TaskList = ({ filter }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await getTasks(filter !== 'All' ? filter : null);
      setTasks(tasksData);
    };
    fetchTasks();
  }, [filter]);

  const handleUpdateStatus = async (taskId, status) => {
    try {
      await updateTaskStatus(taskId, status);
      setTasks(tasks.map(task => task.id === taskId ? { ...task, status } : task));
    } catch (error) {
      console.error('Error updating task status:', error);
      alert('Error updating task status:', error.message);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
      alert('Error deleting task:', error.message);
    }
  };

  const filteredTasks = tasks.filter(task => filter === 'All' ? true : task.status === filter);

  return (
    <ul className="max-w-md mx-auto bg-white rounded shadow-md">
      {filteredTasks.map(task => (
        <li key={task.id} className="p-4 border-b last:border-none">
          <div className="flex justify-between items-center">
            <div>
              <strong>{task.title}</strong>
              <p className="text-gray-700">{task.description}</p>
              <span className={`px-2 py-1 rounded text-white ${task.status === 'To Do' ? 'bg-yellow-500' : task.status === 'In Progress' ? 'bg-blue-500' : 'bg-green-500'}`}>{task.status}</span>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleUpdateStatus(task.id, 'To Do')} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">To Do</button>
              <button onClick={() => handleUpdateStatus(task.id, 'In Progress')} className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">In Progress</button>
              <button onClick={() => handleUpdateStatus(task.id, 'Done')} className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Done</button>
              <button onClick={() => handleDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
