import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackNavigatorList = {
  BottomStackNavigator: undefined;
  Home: undefined;
  Surfing: undefined;
  Hula: undefined;
  Volcano: undefined;
};

export type DefaultNavigationProps<T extends keyof RootStackNavigatorList> =
  NativeStackNavigationProp<RootStackNavigatorList, T>;
export type DefaultRouteProps<T extends keyof RootStackNavigatorList> =
  RouteProp<RootStackNavigatorList, T>;
