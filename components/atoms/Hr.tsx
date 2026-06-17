import { colors } from "@/constants/theme";
import { View, type ViewStyle } from "react-native";

const defaultStyle: ViewStyle = {
  height: 1,
  width: 120,
  backgroundColor: colors.warning,
  marginHorizontal: 30,
  marginVertical: 5,
  borderRadius: 150,
};

export default function Hr({ style }: { style?: ViewStyle }) {
  return <View style={[defaultStyle, style]} />;
}
