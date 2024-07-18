import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';

const Volcano = () => {
  return (
    <View style={styles.root}>
      <Header />
      {/* <Text>Volcano</Text> */}
    </View>
  );
};

export default Volcano;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E6F2F2',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
