// /**
//  * Learn more about light and dark modes:
//  * https://docs.expo.dev/guides/color-schemes/
//  */

// import { colors } from '@/constants/theme';
// import { useColorScheme } from '@/hooks/use-color-scheme';

// export function useThemeColor(
//   props: { light?: string; dark?: string },
//   colorName: keyof typeof colors.background & keyof typeof colors.secondary
// ) {
//   const theme = useColorScheme() ?? 'light';
//   const colorFromProps = props[theme];

//   if (colorFromProps) {
//     return colorFromProps;
//   } else {
//     return colors[theme][colorName];
//   }
// }
