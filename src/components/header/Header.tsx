import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

const Header = () => {
  return (
    <View style={styles.root}>
      <Image
        source={require('../../assets/images/Aloha.png')}
        resizeMode="center"
        resizeMethod="resize"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 80,
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    top: 0,
  },
});
