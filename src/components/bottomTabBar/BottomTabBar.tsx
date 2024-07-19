import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useBottomTabController} from './BottomTabBarController';
import {colors} from '../../constants/colors';
import Animated from 'react-native-reanimated';
import {fonts} from '../../constants/fonts';

const android_ripple = {
  borderless: false,
  foreground: true,
  color: colors.green,
};
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
          const activeTabStyle =
            activeTab === item.screenName ? colors.green : '';
          return (
            <Pressable
              key={index}
              onPress={() => requestTabChange(item.screenName)}
              style={styles.tabItem}
              android_ripple={android_ripple}
              onLayout={e => onLayout(e, item.screenName)}>
              <View>
                {/* {console.log(item.screenName)} */}
                <Icon height={21} width={21} activeColor={activeTabStyle} />
              </View>
              <Text
                numberOfLines={1}
                style={[
                  styles.labelStyle,
                  activeTab === item.screenName && styles.activeTab,
                ]}>
                {item.label}
              </Text>
              {showIndicator && (
                <Animated.View style={[styles.tabIndicator, rTabStyle]} />
              )}
            </Pressable>
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
  activeTab: {
    color: colors.green,
    ...fonts.ibmPlexMonoBold16,
  },
});
