import LottieView from "lottie-react-native";

export default function Notfound() {
  return (
    <LottieView
      source={require("@/assets/images/lottie/Loading.json")}
      autoPlay
      loop
    />
  );
}