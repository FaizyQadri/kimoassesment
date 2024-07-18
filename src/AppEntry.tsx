import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native';
import {colors} from './constants/colors';
import RootStackNavigator from './routes/RootStackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppEntry = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <KeyboardAvoidingView
        style={styles.keyboadViewStyle}
        behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
        <GestureHandlerRootView style={styles.gestureViewStyle}>
          <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
          <RootStackNavigator />
        </GestureHandlerRootView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  keyboadViewStyle: {
    flex: 1,
  },
  gestureViewStyle: {
    flex: 1,
  },
  safeAreaViewStyle: {
    flex: 1,
  },
});

export default AppEntry;
