import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {colors} from '../../constants/colors';
export interface ISvgProps extends SvgProps {
  xmlns?: string;
  xmlnsXlink?: string;
  xlinkHref?: string;
  activeColor?: string;
}
const HomeIcon = (props: ISvgProps) => {
  const {activeColor} = props;
  return (
    <Svg
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1 6.16242C1 5.84445 1.15121 5.54543 1.40732 5.35698L6.40732 1.6777C6.75986 1.41828 7.24014 1.41828 7.59269 1.6777L12.5927 5.35698C12.8488 5.54543 13 5.84445 13 6.16242V14C13 14.5523 12.5523 15 12 15H2C1.44772 15 1 14.5523 1 14V6.16242Z"
        stroke={activeColor ? colors.green : '#001A1A'}
        strokeWidth={2}
      />
    </Svg>
  );
};
export default HomeIcon;
