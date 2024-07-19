import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ContentHeading from '../contentHeading/ContentHeading';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

const TravelGuideCard = () => {
  return (
    <>
      <ContentHeading title={'Travel Guide'} />
      <View style={styles.cardWrapper}>
        <View style={styles.cardDataContainer}>
          <View>
            <Text style={styles.guideName}>{'Hadwin Malone'}</Text>
            <Text style={styles.guideSince}>{'Guide since 2012'}</Text>
          </View>
          <View style={styles.guidePicStyle}>
            <Image source={require('../../assets/images/travelGuide.png')} />
          </View>
        </View>
        <TouchableOpacity style={styles.contactBtnStyle}>
          <Text style={styles.contactText}>{'Contact'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TravelGuideCard;

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 80,
  },
  cardDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  guideName: {
    color: colors.black,
    ...fonts.ibmPlexMonoBold24,
    marginBottom: 5,
  },
  guideSince: {
    color: colors.black,
    ...fonts.ibmPlexMono16,
  },
  guidePicStyle: {
    width: 74,
    height: 74,
  },
  contactBtnStyle: {
    marginTop: 10,
    height: 40,
    width: 116,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactText: {
    color: colors.green,
    ...fonts.ibmPlexMonoBold16,
  },
});
