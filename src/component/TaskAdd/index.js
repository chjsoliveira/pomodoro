import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default function TaskAdd({ handleAddPress }) {
  const [collectionName, setCollectionName] = useState('');

  return (
    <View style={styles.cardView}>
      <View style={styles.input}>
        <TextInput
          onChangeText={(collectionName) => setCollectionName(collectionName)}
          placeholder="Adicione uma tarefa"
          clearButtonMode="always"
          size={18}
          value={collectionName}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.addButton} onPress={handleAddPress}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}