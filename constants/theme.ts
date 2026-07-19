import { green } from "react-native-reanimated/lib/typescript/Colors";

export const colors = {
  primary: "#2E7D32",
  primaryPressed: "#256628",

  btnPrimary: "#1C4033",
  btnPrimaryPressed: "#143027",

  secondary: "#C8E6C9",
  secondaryPressed: "#B5D8B6",

  danger: "#D32F2F",
  dangerPressed: "#B71C1C",

  warning: "#C89D41",
  warningPressed: "#AE8733",

  gray: "#F1E7D0",
  grayPressed: "#E2D5B8",

  green: "#00C68D",
  greenPressed: "#00A978",

  yellow: "#FFDA62",
  yellowPressed: "#F2C63E",

  blue: "#89D4FF",
  bluePressed: "#63C2FF",

  pink: "#F5788B",
  pinkPressed: "#EC5D74",

  orange: "#F25912",
  orangePressed: "#DB4A08",

  violet: "#723EC3",
  violetPressed: "#5F2FAE",

  transparent: "transparent",
  transparentPressed: "#F3F4F6",

  background: "#F8F6F2",
  white: "#FFFFFF",
  black: "#000000",
  text: "#1F1F1F",

  excellent: "#A9ECCC",
  veryGood: "#CAE9FA",
  good: "#FDE68A",
  average: "#C89D41",
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