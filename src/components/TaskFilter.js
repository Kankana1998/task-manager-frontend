import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <div className="max-w-md mx-auto my-4">
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default TaskFilter;
