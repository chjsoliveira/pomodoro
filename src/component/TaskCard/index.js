import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather, AntDesign } from '@expo/vector-icons';
import * as theme from '../../theme';
import * as api from '../../services/api';
import { CTX } from '../../tools/context';

const TaskCard = ({ item }) => {
  const taskContext = useContext(CTX);
  const { _deleteTask } = taskContext;

  const handleDeletePress = (id) => {
    console.log('handleDeletePress');
    const timer = setTimeout(() => {
      console.log('Implementar Loading');
    }, 1000);
    _deleteTask(id);
    clearTimeout(timer);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>{item.name}</Text>

      <View style={styles.containerButton}>
        <View style={styles.button}>
          <TouchableOpacity>
            <AntDesign name="play" size={20} color={theme.colors.primary} />
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
