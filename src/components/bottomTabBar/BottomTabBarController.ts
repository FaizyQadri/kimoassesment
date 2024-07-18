import React, {useEffect, useState} from 'react';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BottomTabData} from '../../utils/utilities';

export interface BottomTabDataProps {
  id: number;
  screenName: string;
  label: string;
  Icon: React.FC;
}

const useBottomTabController = () => {
  const [coordinates, setCoordinates] = useState({});
  const routes = useNavigationState(state => state.routes);
  const navigation = useNavigation();
  const translateX = useSharedValue(0);

  const requestTabChange = (screen: string) => {
    navigation.navigate('BottomStackNavigator', {screen});
  };

  const onLayout = (e, screen) => {
    const x = e.nativeEvent.layout.x;
    setCoordinates(pState => ({
      ...pState,
      [screen]: x,
    }));
  };
  const [activeTab, setActiveTab] = useState(BottomTabData[0].screenName);

  const onNavigationStateChange = () => {
    for (let route of routes) {
      if (route.name === 'BottomStackNavigator') {
        setActiveTab(BottomTabData[route?.state?.index || 0].screenName);
        break;
      }
    }
  };
  const slideToNextTab = () => {
    if (coordinates[activeTab] === undefined) return;
    translateX.value = withTiming(coordinates[activeTab]);
  };
  const rTabStyle = useAnimatedStyle(
    () => ({
      transform: [{translateX: translateX.value}],
    }),
    [],
  );
  useEffect(() => {
    onNavigationStateChange();
  }, [routes]);
  useEffect(() => {
    slideToNextTab();
  }, [activeTab, coordinates]);

  return {
    BottomTabData,
    onLayout,
    requestTabChange,
    activeTab,
    rTabStyle,
  };
};

export {useBottomTabController};
