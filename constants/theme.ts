import { green } from "react-native-reanimated/lib/typescript/Colors";

export const colors = {
  primary: "#2E7D32",   // أخضر قرآني
  btnPrimary: "#1C4033", // أخضر أفتح للأزرار
  secondary: "#C8E6C9",
  danger: "#D32F2F",
  warning: "#c89d41",
  text: "#1F1F1F",
  gray: "#F1E7D0",
  green:'#00C68D',
  yellow:'#FFDA62',
  blue:'#89D4FF',
  pink: "#F5788B",
  orange: "#F25912",
  violet: "#723EC3",
  transparent:'transparent',
  background: "#F8F6F2",
  white: "#FFFFFF",
  black:'#000000',
  excellent: "#A9ECCC",
  veryGood: "#CAE9FA",
  good: "#FDE68A",
  average: "#c89d41",
  bad: "#FECDD3",

};

export const groupColors = {
  '0': colors.orange,
  '1': colors.yellow,
  '2': colors.pink,
  '3': colors.danger, 
  '4': colors.violet,
  '5': colors.green,
  '6': colors.blue,
}

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
};
export const sizeClass = {
  sm: 12 ,
  md: 16 ,
  lg: 20,
  xl: 24,
  xxl: 30,
};
export const btnSize = {
  sm: 60 ,
  md: 80 ,
  lg: 100,
  xl: 120,
  xxl: 140,
};

export const textClass = {
  primary: "text-primary",
  secondary: "text-gray-500",
};
export const radius = {
  sm: 6,
  md: 12,
  lg: 20,
};

export const theme = {
  colors,
  spacing,
  radius,
};