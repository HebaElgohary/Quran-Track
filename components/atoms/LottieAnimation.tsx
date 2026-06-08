import LottieView from "lottie-react-native";

export default function LottieAnimation() {
  return (
    <LottieView
      source={require("@/assets/animations/loading.json")}
      autoPlay
      loop
    />
  );
}