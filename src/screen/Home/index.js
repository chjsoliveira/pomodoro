import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styles from './styles';

import Header from '../../component/Header';
import TaskList from '../../component/TaskList';
import TaskAdd from '../../component/TaskAdd';

const Home = ({ navigation }) => {
  const [tasks, setTasks] = useState('');

  const data = [
    { id: 1, name: 'Nome da Tarefa 1' },
    { id: 2, name: 'Nome da Tarefa 2' },
    { id: 3, name: 'Nome da Tarefa 3' },
    { id: 4, name: 'Nome da Tarefa 4' },
    { id: 5, name: 'Nome da Tarefa 5' },
    { id: 6, name: 'Nome da Tarefa 6' },
    { id: 7, name: 'Nome da Tarefa 7' },
    { id: 8, name: 'Nome da Tarefa 8' },
    { id: 9, name: 'Nome da Tarefa 9' },
  ];

  useEffect(() => {
    setTasks(data);
  }, []);

  const handleAddPress = (task) => {
    data.push(task);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} toggleDrawer />
      <TaskAdd />
      <TaskList tasks={tasks} />
    </View>
  );
};

export default Home;
