"use client";  

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../../styles/TaskDetails.module.css';

const TaskDetails = () => {
  const { id } = useParams();  
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.BACKEND_URL}/tasks/${id}`)
        .then(response => response.json())
        .then(data => setTask(data));
    }
  }, [id]);

  const handleUpdate = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });

    if (response.ok) {
      alert('Task updated successfully!');
    } else {
      alert('Failed to update task');
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Task Details</h1>
      <div className={styles.details}>
        <input
          type="text"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          className={styles.input}
        />
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className={styles.textarea}
        />
        <button onClick={handleUpdate} className={styles.button}>Update Task</button>
      </div>
    </div>
  );
};

export default TaskDetails;
