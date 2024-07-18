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

const Home = () => {
  const categoryData = [
    {id: 1, title: 'Categories'},
    {id: 2, title: 'Culinary'},
    {id: 3, title: 'Eco-tourism'},
    {id: 4, title: 'Family'},
    {id: 5, title: 'Sport'},
  ];
  return (
    <View style={styles.root}>
      <Header />
      <FlatList
        data={[1]}
        style={{flex: 1}}
        contentContainerStyle={
          {
            // paddingBottom: 60,
          }
        }
        ListHeaderComponent={() => {
          return <Header />;
        }}
        renderItem={() => {
          return (
            <View style={{flex: 1, marginTop: 80}}>
              <Image
                style={{
                  width: '100%',
                  // flex: 1,
                }}
                source={require('../../assets/images/Head.png')}
                // resizeMethod="resize"
                resizeMode="stretch"
              />
              <View
                style={{
                  backgroundColor: colors.white,
                  paddingVertical: 30,
                }}>
                <ContentHeading
                  customStyle={{
                    marginTop: 0,
                  }}
                  title="Highlights"
                />
                <View
                  style={{
                    width: 304,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    paddingBottom: 10,
                    marginLeft: 20,
                    marginRight: 10,
                    // borderWidth: 1,
                    marginTop: 20,
                    backgroundColor: colors.white,
                    shadowColor: '#008080',
                    shadowOffset: {
                      width: 0,
                      height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,

                    elevation: 24,
                  }}>
                  <View>
                    <Image
                      style={{
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      resizeMethod="resize"
                      resizeMode="cover"
                      source={require('../../assets/images/surfing1.png')}
                    />
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 20,
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        color: colors.green,
                        ...fonts.ibmPlexMonoBold24,
                      }}>
                      {'Surfing'}
                    </Text>
                    <Text
                      style={{
                        color: colors.black,
                        ...fonts.ibmPlexMono16,
                      }}>
                      {'Best Hawaiian islands for surfing.'}
                    </Text>
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        backgroundColor: '#E6F2F2',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                        alignSelf: 'flex-end',
                      }}>
                      <ArrowForward />
                    </TouchableOpacity>
                  </View>
                  {/* <Image source={require('../../assets/images/surfing1.png')} /> */}
                </View>
              </View>
              <ContentHeading title="Categories" />
              <View style={{marginHorizontal: 20, marginTop: 10}}>
                {categoryData.map(({id, title}) => {
                  return <CategoriesCard key={id} title={title} />;
                })}
              </View>
              <ContentHeading title="Travel Guide" />
              <View
                style={{
                  backgroundColor: colors.white,
                  borderRadius: 8,
                  padding: 20,
                  marginHorizontal: 20,
                  marginTop: 10,
                  marginBottom: 80,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: colors.black,
                        ...fonts.ibmPlexMonoBold24,
                        marginBottom: 5,
                      }}>
                      {'Hadwin Malone'}
                    </Text>
                    <Text
                      style={{
                        color: colors.black,
                        ...fonts.ibmPlexMono16,
                      }}>
                      {'Guide since 2012'}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 74,
                      height: 74,
                    }}>
                    <Image
                      source={require('../../assets/images/travelGuide.png')}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    height: 40,
                    width: 116,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#008080',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#008080',
                      ...fonts.ibmPlexMonoBold16,
                    }}>
                    {'Contact'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          marginHorizontal: 20,
          // marginVertical: 20,
          // marginBottom: 50,
          // paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 40,
            borderRadius: 8,
            backgroundColor: '#008080',
            shadowColor: '#073838',
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}>
          <Text
            style={{
              color: colors.white,
              ...fonts.ibmPlexMonoBold16,
            }}>
            {'Book a trip'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#E6F2F2',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  categoriesWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    color: colors.black,
    ...fonts.ibmPlexMonoBold16,
  },
});
