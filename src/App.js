import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import TaskManager from './components/TaskManager';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/taskmanager"
        element={
          <PrivateRoute>
            <TaskManager />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
