import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { CTX } from '../../tools/context';

export default function TaskAdd(props) {
  const [taskName, setTaskName] = useState('');

  const taskContext = useContext(CTX);
  const { _addTask } = taskContext;

  const handleAddPress = () => {
    console.log('handleAddPress');
    const newTask = {
      name: taskName,
    };
    const timer = setTimeout(() => {
      console.log('Implementar Loading');
    }, 1000);
    _addTask(newTask);
    clearTimeout(timer);
    setTaskName('');
  };

  return (
    <View style={styles.cardView}>
      <View style={styles.input}>
        <TextInput
          onChangeText={(taskName) => setTaskName(taskName)}
          placeholder="Adicione uma tarefa"
          clearButtonMode="always"
          size={18}
          value={taskName}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddPress()}
        >
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
