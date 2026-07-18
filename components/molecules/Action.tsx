import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

interface ActionProps {
  icon: React.ComponentProps<typeof Feather>["name"];
  color: string;
  bg: string;
  pressedBg: string;
  onPress: () => void;
}

export default function Action({
  icon,
  color,
  bg,
  pressedBg,
  onPress,
}: ActionProps) {const [pressed, setPressed] = useState(false);
      //---------------- animation------------------ //

  const scale = useRef(new Animated.Value(1)).current;

const opacity = useRef(new Animated.Value(1)).current;
const rotate = scale.interpolate({
  inputRange: [0.92, 1],
  outputRange: ["-6deg", "0deg"],
})

const pressIn = () => {
  Animated.parallel([
    Animated.spring(scale, {
      toValue: 0.92,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 0.7,
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start();
};

const pressOut = () => {
  Animated.parallel([
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }),
  ]).start();
};
// ----------------------------------------// 
  return (
<Animated.View
  style={{
    opacity,
    transform: [
      { scale },
      { rotate },
    ],
  }}
>
<Pressable
  onPress={onPress}
  onPressIn={() => {
    setPressed(true);
    pressIn();
  }}
  onPressOut={() => {
    setPressed(false);
    pressOut();
  }}
  style={[
    styles.action,
    {
      borderWidth: 1,
      borderColor: color,
      backgroundColor: pressed ? pressedBg : bg,
    },
  ]}
>
  <Feather name={icon} size={18} color={color} />
</Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    // direction:"rtl",

    backgroundColor: "#fff",

    marginHorizontal: 12,

    marginVertical: 6,

    padding: 14,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: "#E5E7EB",

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  header: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  studentInfo: {
    alignItems: "flex-start",
    width:'70%',

  },

  dateRow: {
    flexDirection: "row",

    alignItems: "center",

    gap: 5,

    marginTop: 4,
  },

  date: {
    fontSize: 12,

    color: "#64748B",
  },

  grade: {
    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 20,
  },

  gradeText: {
    fontSize: 12,

    fontWeight: "800",

    color: "#fff",
  },

  quran: {
    marginTop: 12,

    backgroundColor: "#065F46",

    borderRadius: 16,

    padding: 12,

    flexDirection: "row-reverse",

    alignItems: "center",

    gap: 10,
  },

  quranIcon: {
    width: 38,

    height: 38,

    borderRadius: 20,

    backgroundColor: "rgba(255,255,255,.2)",

    alignItems: "center",

    justifyContent: "center",
  },

  quranLabel: {
    fontSize: 11,

    color: "#D1FAE5",
  },

  quranText: {
    fontSize: 16,

    fontWeight: "800",

    color: "#fff",
  },

  ayah: {
    fontSize: 12,

    color: "#D1FAE5",
  },

  details: {
    flexDirection: "row",

    gap: 8,

    marginTop: 10,
  },

  detailBox: {
    flex: 1,

    backgroundColor: "#F8FAFC",

    borderRadius: 12,

    padding: 10,

    alignItems: "center",
  },

  detailTitle: {
    fontSize: 11,

    color: "#64748B",

    marginTop: 3,
  },

  detailValue: {
    fontSize: 13,

    fontWeight: "700",

    color: "#1E293B",

    marginTop: 3,
  },

  actions: {
    flexDirection: "row",

    justifyContent: "center",

    gap: 14,

    marginTop: 12,
  },

  action: {
    width: 45,

    height: 45,

    borderRadius: 21,

    alignItems: "center",

    justifyContent: "center",
  },
});
