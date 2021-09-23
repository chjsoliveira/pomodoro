import React, { useState, useEffect } from 'react';
import * as api from '../../services/api';

const CTX = React.createContext();

export { CTX };

export default function Store(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    const data = await api.getTaskList();
    setTasks(data);
  };

  const _addTask = async (newTask) => {
    await api.saveTask(newTask);
    const data = await api.getTaskList();
    setTasks(data);
  };

  const _deleteTask = async (id) => {
    await api.deleteTask(id);
    const data = await api.getTaskList();
    setTasks(data);
  };

  return (
    <CTX.Provider value={{ tasks, _addTask, _deleteTask }}>
      {props.children}
    </CTX.Provider>
  );
}
