import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import ArrowForward from '../../assets/svg/ArrowForward';
import {ContentHEadingProps} from '../contentHeading/ContentHeading';
import {RectButton} from 'react-native-gesture-handler';

const CategoriesCard = ({title = 'Title'}: ContentHEadingProps) => {
  return (
    <RectButton rippleColor={colors.brightGray} style={styles.root}>
      <Text style={styles.text}>{title}</Text>
      <ArrowForward />
    </RectButton>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    // paddingHorizontal:10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    color: colors.black,
    ...fonts.ibmPlexMono16,
    flex: 1,
  },
});
