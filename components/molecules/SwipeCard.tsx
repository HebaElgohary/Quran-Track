import React from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export default function SwipeCard({
  children,
  onEdit,
  onDelete,
}: {
  children: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd(() => {
      if (translateX.value > 120) {
        runOnJS(onEdit)();
      } else if (translateX.value < -120) {
        runOnJS(onDelete)();
      }

      translateX.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={{ position: "relative" }}>
      {/* BACKGROUND ACTIONS */}
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          borderRadius: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Feather name="edit-2" size={18} color="#F59E0B" />
          <Text style={{ color: "#F59E0B" }}>تعديل</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
          <Text style={{ color: "red" }}>حذف</Text>
          <Feather name="trash-2" size={18} color="red" />
        </View>
      </View>

      {/* FRONT CARD */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyle]}>
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}