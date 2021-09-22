import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import TaskCard from '../TaskCard';

export default function TaskList({ navigation, title, tasks }) {
  const renderTaskItem = ({ item }) => {
    return <TaskCard style={styles.card} key={item.id} item={item} />;
  };

  return (
    <FlatList
      style={styles.taskList}
      keyExtractor={(item) => String(item.id)}
      data={tasks}
      renderItem={renderTaskItem}
    />
  );
}

TaskList.defaultProps = {
  title: 'Tarefas',
  favorite: false,
};
