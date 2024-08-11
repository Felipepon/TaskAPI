"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/task`)
      .then(response => response.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Task List</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/create-task" className={styles.link}>
              Create Task
            </Link>
          </li>
        </ul>
      </nav>
      {tasks.length > 0 ? (
        <ul className={styles.taskList}>
          {tasks.map(task => (
            <li key={task.id} className={styles.taskItem}>
              <Link href={`/taskDetail/${task.id}`} className={styles.link}>
                {task.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default Home;
