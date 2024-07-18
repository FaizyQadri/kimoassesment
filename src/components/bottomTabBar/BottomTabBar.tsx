import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {useBottomTabController} from './BottomTabBarController';
import {colors} from '../../constants/colors';
import Animated from 'react-native-reanimated';
import {fonts} from '../../constants/fonts';

const BottomTabBar = () => {
  const {BottomTabData, onLayout, requestTabChange, activeTab, rTabStyle} =
    useBottomTabController();

  //   console.log(activeTab);

  return (
    <View style={styles.tabBar}>
      <View style={styles.tabContainer}>
        {BottomTabData.map((item, index) => {
          const {Icon} = item;
          const showIndicator = index === 0;

          return (
            <React.Fragment key={index}>
              <TouchableWithoutFeedback
                onPress={() => requestTabChange(item.screenName)}>
                <View
                  style={styles.tabItem}
                  onLayout={e => onLayout(e, item.screenName)}>
                  <View>
                    {/* {console.log(item.screenName)} */}
                    <Icon
                      height={24}
                      width={24}
                      activeColor={
                        activeTab === item.screenName ? colors.green : ''
                      }
                    />
                  </View>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.labelStyle,
                      activeTab === item.screenName && {
                        color: colors.green,
                        ...fonts.ibmPlexMonoBold16,
                      },
                    ]}>
                    {item.label}
                  </Text>
                  {showIndicator && (
                    <Animated.View style={[styles.tabIndicator, rTabStyle]} />
                  )}
                </View>
              </TouchableWithoutFeedback>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    width: '100%',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // borderWidth:1
  },
  labelStyle: {
    ...fonts.ibmPlexMonoBold15,
    color: colors.black,
    marginTop: 10,
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 3,
    borderTopColor: colors.green,
    borderRadius: 1,
  },
});
