import React from 'react';
import { View } from 'react-native';
import styles from './styles';

import { Header, TaskList, TaskAdd } from '../../component';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} toggleDrawer />
      <TaskAdd onAddPress={() => handleAddPress} />
      <TaskList />
    </View>
  );
};

export default Home;
