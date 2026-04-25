import { colors } from "@/constants/theme";
import { View } from "react-native";

export default function Hr() {
  return (
    <View
      style={{
        height: 1,
        width: 120,
        backgroundColor: colors.warning,
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 150,
      }}
    />
  );
}
