import {useNavigation} from '@react-navigation/native';
import {DefaultNavigationProps} from '../../routes/RoutesType';

const useHomeCotroller = () => {
  const navigation =
    useNavigation<DefaultNavigationProps<'BottomStackNavigator'>>();
  const GoToTab = (screen: string) => {
    navigation.navigate('BottomStackNavigator', {
      screen: screen,
    });
  };

  const categoryData = [
    {id: 1, title: 'Categories'},
    {id: 2, title: 'Culinary'},
    {id: 3, title: 'Eco-tourism'},
    {id: 4, title: 'Family'},
    {id: 5, title: 'Sport'},
  ];

  const HighlightsData = [
    {
      id: 1,
      title: 'Surfing',
      detail: 'Best Hawaiian islands for surfing.',
      img: require('../../assets/images/surfing1.png'),
      screen: 'Surfing',
    },
    {
      id: 2,
      title: 'Hula',
      detail: 'Try it yourself.',
      img: require('../../assets/images/hula.png'),
      screen: 'Hula',
    },
    {
      id: 3,
      title: 'Vulcanoes',
      detail: 'Volcanic conditions can change at any time.',
      img: require('../../assets/images/volcanoes.png'),
      screen: 'Volcano',
    },
  ];
  return {
    HighlightsData,
    categoryData,
    GoToTab,
  };
};

export {useHomeCotroller};
