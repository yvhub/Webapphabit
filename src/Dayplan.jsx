import React, { useState, useEffect } from 'react';

const DayPlan = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    const newTask = prompt('Geben Sie eine Aufgabe ein:');
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      
      <button onClick={handleAddTask}>Aufgabe hinzufügen</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayPlan;
