import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import TaskCard from '../TaskCard';
import { CTX } from '../../tools/context';

export default function TaskList({ navigation, title }) {
  const taskContext = useContext(CTX);
  const { tasks } = taskContext;

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
