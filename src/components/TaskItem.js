import React from 'react';



const TaskItem = ({ task, onDelete }) => {
  const dispatch = useDispatch();

  const handleChangeStatus = (event) => {
    dispatch(updateTask({ ...task, status: event.target.value }));
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm">{task.description}</p>
        <select
          value={task.status}
          onChange={handleChangeStatus}
          className="mt-2 mb-3 block border border-gray-300 rounded-md"
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white mt-4 px-4 py-2 rounded-md shadow-sm"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
