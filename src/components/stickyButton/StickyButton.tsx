import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

const StickyButton = () => {
  return (
    <TouchableOpacity style={styles.stickyButtonStyle}>
      <Text style={styles.stickyBtnText}>{'Book a trip'}</Text>
    </TouchableOpacity>
  );
};

export default StickyButton;

const styles = StyleSheet.create({
  stickyButtonStyle: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.green,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 10,
  },
  stickyBtnText: {
    color: colors.white,
    ...fonts.ibmPlexMonoBold16,
  },
});
