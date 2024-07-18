import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

export interface ContentHEadingProps {
  title: string;
  customStyle?: ViewStyle;
}

const ContentHeading = ({
  title = 'Title',
  customStyle,
}: ContentHEadingProps) => {
  return (
    <View style={[styles.categoriesWrapper, customStyle]}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export default ContentHeading;

const styles = StyleSheet.create({
  categoriesWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    color: colors.black,
    ...fonts.ibmPlexMonoBold16,
  },
});
