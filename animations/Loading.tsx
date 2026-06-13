import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function Loadign() {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("@/assets/images/lottie/Loading.json")}
        autoPlay
        loop
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}