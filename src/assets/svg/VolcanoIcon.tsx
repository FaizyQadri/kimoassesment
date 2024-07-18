import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProps} from './HomeIcon';
import {colors} from '../../constants/colors';
const VolcanoIcon = (props: ISvgProps) => {
  const {activeColor} = props;
  return (
    <Svg
      width={22}
      height={12}
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 12L6 4L10.5 10H18L13 3.35L10.5 6.65L9.25 5L13 0L22 12H0ZM4 10H8L6 7.325L4 10Z"
        fill={activeColor ? colors.green : '#001A1A'}
      />
    </Svg>
  );
};
export default VolcanoIcon;
