import {TextStyle} from 'react-native';

const getFonts = (fontFamily: string, fontSize: number): TextStyle => ({
  fontFamily,
  fontSize,
});
export const fonts = {
  ibmPlexMono12: getFonts('IBMPlexMono-Regular', 12),
  ibmPlexMono13: getFonts('IBMPlexMono-Regular', 13),
  ibmPlexMono14: getFonts('IBMPlexMono-Regular', 14),
  ibmPlexMono15: getFonts('IBMPlexMono-Regular', 15),
  ibmPlexMono16: getFonts('IBMPlexMono-Regular', 16),
  ibmPlexMono17: getFonts('IBMPlexMono-Regular', 17),
  ibmPlexMono18: getFonts('IBMPlexMono-Regular', 18),
  ibmPlexMonoBold12: getFonts('IBMPlexMono-Bold', 12),
  ibmPlexMonoBold13: getFonts('IBMPlexMono-Bold', 13),
  ibmPlexMonoBold14: getFonts('IBMPlexMono-Bold', 14),
  ibmPlexMonoBold15: getFonts('IBMPlexMono-Bold', 15),
  ibmPlexMonoBold16: getFonts('IBMPlexMono-Bold', 16),
  ibmPlexMonoBold17: getFonts('IBMPlexMono-Bold', 17),
  ibmPlexMonoBold18: getFonts('IBMPlexMono-Bold', 18),
  ibmPlexMonoBold24: getFonts('IBMPlexMono-Bold', 24),
};
