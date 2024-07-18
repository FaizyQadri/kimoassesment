import HomeIcon from '../assets/svg/HomeIcon';
import HulaIcon from '../assets/svg/HulaIcon';
import SurfingIcon from '../assets/svg/SurfingIcon';
import VolcanoIcon from '../assets/svg/VolcanoIcon';

const getBottomTab = (id, screenName, label, Icon) => ({
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

export {getBottomTab, BottomTabData};
