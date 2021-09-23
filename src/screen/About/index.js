import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Header } from '../../component';

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>
        Em breve será implementada a página.
      </Text>
    </View>
  );
};

export default About;
