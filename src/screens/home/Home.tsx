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
import {fonts} from '../../constants/fonts';
import ContentHeading from '../../components/contentHeading/ContentHeading';
import CategoriesCard from '../../components/categoriesCard/CategoriesCard';
import ArrowForward from '../../assets/svg/ArrowForward';
import StickyButton from '../../components/stickyButton/StickyButton';
import TravelGuideCard from '../../components/travelGuideCard/TravelGuideCard';
import {useHomeCotroller} from './HomeContoller';

const Home = () => {
  const {GoToTab, HighlightsData, categoryData} = useHomeCotroller();
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
                source={require('../../assets/images/Head.png')}
                resizeMode="stretch"
              />
              <View style={styles.highlightsWrapper}>
                <ContentHeading
                  customStyle={styles.highlightHeader}
                  title="Highlights"
                />
                <FlatList
                  data={HighlightsData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => (
                    <View style={styles.itemSeprator} />
                  )}
                  renderItem={({item}) => {
                    return (
                      <View key={item.id} style={styles.highlightCardWrapper}>
                        <View>
                          <Image
                            style={styles.highlightImgs}
                            resizeMethod="resize"
                            resizeMode="cover"
                            source={item.img}
                          />
                        </View>
                        <View style={styles.highlightDataContainer}>
                          <Text style={styles.highlightTitle}>
                            {item.title}
                          </Text>
                          <Text style={styles.highlightDetails}>
                            {item.detail}
                          </Text>
                          <TouchableOpacity
                            onPress={() => GoToTab(item.screen)}
                            style={styles.forwardBtn}>
                            <ArrowForward />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
              <ContentHeading title="Categories" />
              <View style={styles.categoriesCardWrapper}>
                {categoryData.map(({id, title}) => {
                  return <CategoriesCard key={id} title={title} />;
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

export default Home;

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
  highlightsWrapper: {
    backgroundColor: colors.white,
    paddingVertical: 30,
  },
  highlightHeader: {
    marginTop: 0,
  },
  itemSeprator: {
    width: 20,
  },
  highlightCardWrapper: {
    width: 304,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 10,
    marginTop: 20,
    paddingBottom: 20,
    backgroundColor: colors.white,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  highlightImgs: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  highlightDataContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  highlightTitle: {
    color: colors.green,
    ...fonts.ibmPlexMonoBold24,
  },
  highlightDetails: {
    color: colors.black,
    ...fonts.ibmPlexMono16,
  },
  forwardBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.brightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  marginH: {
    marginHorizontal: 20,
  },
  categoriesCardWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
  },
});
