import { View } from "react-native";
import LottieView from "lottie-react-native";

export default function Notfound() {
  return (
    <View style={{  marginVertical: 10 }}>
      <LottieView
        source={require("@/assets/images/lottie/notFound.json")}
        autoPlay
        loop
        style={{ width: 200, height: 200,  }}
      />
    </View>
  );
}