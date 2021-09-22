import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Feather, AntDesign } from '@expo/vector-icons';
import * as theme from '../../theme';
const TaskCard = ({ item }) => {
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
          <TouchableOpacity>
            <Feather name="trash-2" size={20} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskCard;
