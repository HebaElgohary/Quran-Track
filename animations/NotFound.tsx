import LottieView from "lottie-react-native";

export default function Notfound() {
  return (
    <LottieView
      source={require("@/assets/images/lottie/notFound.json")}
      autoPlay
      loop
    />
  );
}