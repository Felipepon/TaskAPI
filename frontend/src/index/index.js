import { useEffect, useState } from 'react';
import styles from '../index/Home.module.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${process.env.BACKEND_URL}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Task List</h1>
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={styles.taskItem}>
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
