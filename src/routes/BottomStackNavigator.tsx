import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Surfing from '../screens/surfing/Surfing';
import Hula from '../screens/hula/Hula';
import Volcano from '../screens/volcano/Volcano';
import BottomTabBar from '../components/bottomTabBar/BottomTabBar';

const Tab = createBottomTabNavigator();

export type BottomStackParam = {
  Home: undefined;
  Surfing: undefined;
  Hula: undefined;
  Volcano: undefined;
};

const BottomStackNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={() => <BottomTabBar />}
      screenOptions={{headerShown: false}}
      backBehavior="none">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Surfing" component={Surfing} />
      <Tab.Screen name="Hula" component={Hula} />
      <Tab.Screen name="Volcano" component={Volcano} />
    </Tab.Navigator>
  );
};

export default BottomStackNavigator;

const styles = StyleSheet.create({});
