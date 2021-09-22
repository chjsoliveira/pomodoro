import React from 'react';
import { View, Image } from 'react-native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DrawerItems from '../constants/DrawerItems';
import * as theme from '../theme';

import Home from '../screen/Home';
import About from '../screen/About';

import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome5,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const AppNavigator = (props) => {
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
        {...props}
      >
        <View>
          <Image
            style={{ flex: 1, height: 64, width: 64, alignSelf: 'center' }}
            source={require('../../assets/icon.png')}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      {DrawerItems.map((drawer) => (
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            drawerIcon: ({ focused }) =>
              drawer.iconType === 'Material' ? (
                <MaterialCommunityIcons
                  name={drawer.iconName}
                  size={24}
                  color={focused ? theme.colors.primary : 'black'}
                />
              ) : drawer.iconType === 'Feather' ? (
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? theme.colors.primary : 'black'}
                />
              ) : drawer.iconType === 'MaterialIcons' ? (
                <MaterialIcons
                  name={drawer.iconName}
                  size={24}
                  color={focused ? theme.colors.primary : 'black'}
                />
              ) : drawer.iconType === 'AntDesign' ? (
                <AntDesign
                  name={drawer.iconName}
                  size={24}
                  color={focused ? theme.colors.primary : 'black'}
                />
              ) : (
                <FontAwesome5
                  name={drawer.iconName}
                  size={24}
                  color={focused ? theme.colors.primary : 'black'}
                />
              ),
            headerShown: false,
          }}
          component={
            drawer.name === 'Home'
              ? Home
              : drawer.name === 'Sobre'
              ? About
              : PageUnderConstruction
          }
        />
      ))}
    </Drawer.Navigator>
  );
};

export default AppNavigator;
