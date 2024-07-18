import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Header from '../../components/header/Header';

const Surfing = () => {
  return (
    <View style={styles.root}>
      <Header />
      {/* <Text>Surfing</Text> */}
    </View>
  );
};

export default Surfing;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E6F2F2',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
