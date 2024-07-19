import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Header from '../../components/header/Header';
import StickyButton from '../../components/stickyButton/StickyButton';
import TravelGuideCard from '../../components/travelGuideCard/TravelGuideCard';
import {fonts} from '../../constants/fonts';
import ContentHeading from '../../components/contentHeading/ContentHeading';
import {useSurfingController} from './SurfingController';

const Surfing = () => {
  const {spotsData} = useSurfingController();
  return (
    <View style={styles.root}>
      <Header />
      <FlatList
        data={[1]}
        style={styles.main}
        renderItem={() => {
          return (
            <View style={styles.homeContainer}>
              <Image
                style={styles.homeImgStyle}
                source={require('../../assets/images/surfing.png')}
                resizeMode="stretch"
              />
              <View style={styles.surfingDataWrapper}>
                <Text style={styles.surfingDetail}>
                  {
                    'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.'
                  }
                </Text>
              </View>
              <View style={styles.topSpotsWrapper}>
                <ContentHeading
                  title="Top spots"
                  customStyle={styles.customStyle}
                />
                {spotsData.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.spotsContainer}>
                      <View style={styles.topSpotsCard}>
                        <Text style={styles.spotsTitle}>{item.title}</Text>
                        <View style={styles.spotsImgWrapper}>
                          <Image
                            source={item.img}
                            resizeMode="cover"
                            style={styles.spotImgStyle}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <TravelGuideCard />
            </View>
          );
        }}
      />
      <View style={styles.marginH}>
        <StickyButton />
      </View>
    </View>
  );
};

export default Surfing;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.brightGray,
  },
  main: {
    flex: 1,
  },
  homeContainer: {
    flex: 1,
    marginTop: 80,
  },
  homeImgStyle: {
    width: '100%',
  },
  marginH: {
    marginHorizontal: 20,
  },
  surfingDataWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: colors.white,
  },
  surfingDetail: {
    color: colors.black,
    ...fonts.ibmPlexMono16,
  },
  topSpotsWrapper: {
    backgroundColor: colors.white,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  spotsContainer: {
    marginTop: 10,
    shadowColor: '#008080',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    height: 80,
    flex: 1,
    borderRadius: 0.1,
  },
  topSpotsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    flex: 1,
    justifyContent: 'space-between',
  },
  spotsTitle: {
    color: colors.green,
    ...fonts.ibmPlexMonoBold16,
    paddingHorizontal: 20,
    // flex: 1,
  },
  customStyle: {
    paddingHorizontal: 0,
  },
  spotsImgWrapper: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    overflow: 'hidden',
    top: 3.5,
    right: 3,
  },
  spotImgStyle: {
    height: 63,
  },
});
