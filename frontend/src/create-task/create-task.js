import { useState } from 'react';
import styles from '../create-task/CreateTask.module.css';

const CreateTask = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.BACKEND_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });

    if (response.ok) {
      alert('Task created successfully!');
      setName('');
      setDescription('');
    } else {
      alert('Failed to create task');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Task</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
