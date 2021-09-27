import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

import { Header, TaskList, TaskAdd, PomodoroStart } from '../../component';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} toggleDrawer />
      <PomodoroStart />
      <TaskAdd onAddPress={() => handleAddPress} />
      <TaskList />
    </View>
  );
};

export default Home;
