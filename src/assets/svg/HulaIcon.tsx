import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgProps} from './HomeIcon';
import {colors} from '../../constants/colors';
const HulaIcon = (props: ISvgProps) => {
  const {activeColor} = props;

  return (
    <Svg
      width={21}
      height={15}
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M4 15V13H6V9L0 0H14L8 9V13H10V15H4ZM4.9 4H9.1L10.5 2H3.5L4.9 4ZM15 15C14.1667 15 13.4583 14.7083 12.875 14.125C12.2917 13.5417 12 12.8333 12 12C12 11.1667 12.2917 10.4583 12.875 9.875C13.4583 9.29167 14.1667 9 15 9C15.1833 9 15.3583 9.0125 15.525 9.0375C15.6917 9.0625 15.85 9.11667 16 9.2V0H21V3H18V12C18 12.8333 17.7083 13.5417 17.125 14.125C16.5417 14.7083 15.8333 15 15 15Z"
        fill={activeColor ? colors.green : '#001A1A'}
      />
    </Svg>
  );
};
export default HulaIcon;
