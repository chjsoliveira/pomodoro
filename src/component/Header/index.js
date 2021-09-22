import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import styles from './styles';
import * as theme from '../../theme';

export default function Header({ navigation, toggleDrawer, title }) {
  const handleToggleDrawer = () => {
    navigation.toggleDrawer();
  };
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {toggleDrawer ? (
        <TouchableOpacity onPress={handleToggleDrawer}>
          <View style={styles.button}>
            <Entypo name="menu" size={30} color={theme.colors.primary} />
          </View>
        </TouchableOpacity>
      ) : !toggleDrawer ? (
        <TouchableOpacity onPress={() => handleGoBack()}>
          <AntDesign name="left" color="black" size={35} />
        </TouchableOpacity>
      ) : (
        <> </>
      )}
      <View style={styles.viewTextHeader}>
        <Text style={styles.textHeader}>{title}</Text>
      </View>
    </View>
  );
}
