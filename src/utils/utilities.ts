import React, {createRef} from 'react';
import HomeIcon from '../assets/svg/HomeIcon';
import HulaIcon from '../assets/svg/HulaIcon';
import SurfingIcon from '../assets/svg/SurfingIcon';
import VolcanoIcon from '../assets/svg/VolcanoIcon';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackNavigatorList} from '../routes/RoutesType';

const getBottomTab = (
  id: number,
  screenName: string,
  label: string,
  Icon: React.FC,
) => ({
  id,
  screenName,
  label,
  Icon,
});

const BottomTabData = [
  getBottomTab(1, 'Home', 'Home', HomeIcon),
  getBottomTab(2, 'Surfing', 'Surfing', SurfingIcon),
  getBottomTab(3, 'Hula', 'Hula', HulaIcon),
  getBottomTab(4, 'Volcano', 'Volcano', VolcanoIcon),
];

const navigationRef =
  createRef<NavigationContainerRef<RootStackNavigatorList>>();

export {getBottomTab, BottomTabData, navigationRef};
