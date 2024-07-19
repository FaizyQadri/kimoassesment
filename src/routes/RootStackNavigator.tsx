import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigatorList} from './RoutesType';
import BottomStackNavigator from './BottomStackNavigator';
import {navigationRef} from '../utils/utilities';

const RootStack = createNativeStackNavigator<RootStackNavigatorList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'default',
        }}>
        <RootStack.Screen
          name="BottomStackNavigator"
          component={BottomStackNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
