import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import * as theme from '../../theme';
import { CTX } from '../../tools/context';
import StopWatch from '../StopWatch';

const TaskCard = ({ item }) => {
  const [stop, setStop] = useState(true);

  const taskContext = useContext(CTX);
  const { _deleteTask, _addStep } = taskContext;

  const handleDeletePress = (id) => {
    console.log('handleDeletePress');
    const timer = setTimeout(() => {
      console.log('Implementar Loading');
    }, 1000);
    _deleteTask(id);
    clearTimeout(timer);
  };

  const handleStartStopPress = (name) => {
    let prefix = !stop ? 'Tarefa ' : 'Iniciar tarefa ';
    let suffix = !stop ? ' interrompida' : ' ';

    _addStep({
      title: prefix + name + suffix,
    });
    setStop(!stop);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>{item.name}</Text>
      {!stop && <StopWatch startMinutes={25} />}
      <View style={styles.containerButton}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleStartStopPress(item.name)}>
            <Entypo
              name={!stop ? 'controller-stop' : 'controller-play'}
              size={20}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <AntDesign name="edit" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleDeletePress(item.id)}>
            <Feather name="trash-2" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;
