import React, { useState, useEffect } from 'react';
import * as api from '../../services/api';

const CTX = React.createContext();

export { CTX };

export default function Store(props) {
  const [tasks, setTasks] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    const data = await api.getTaskList();
    const dataStep = await api.getStepList();
    setTasks(data);
    setSteps(dataStep);
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

  const _addStep = async (newStep) => {
    await api.addStep(newStep);
    const data = await api.getStepList();
    setSteps(data);
  };

  const _resetSteps = async () => {
    await api.resetSteps();
    const data = await api.getStepList();
    setSteps(data);
  };

  return (
    <CTX.Provider
      value={{ tasks, _addTask, _deleteTask, steps, _addStep, _resetSteps }}
    >
      {props.children}
    </CTX.Provider>
  );
}
