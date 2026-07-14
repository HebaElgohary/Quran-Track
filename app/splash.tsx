import { useProfile } from "@/hooks/useProfile";
import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, View , useWindowDimensions } from "react-native";



export default function Splash() {
  const { width, height } = useWindowDimensions();
  const logoSize = Math.min(width, height) * 0.8;
  const glowSize = width * 0.6;
  const { profile, loading } = useProfile();

  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),

      Animated.sequence([
        Animated.spring(scale, {
          toValue: 1.08,
          friction: 5,
          useNativeDriver: true,
        }),

        Animated.spring(scale, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  useEffect(() => {
    if (loading) return;

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        if (profile.nameAr && profile.nameEn) {
          router.replace("/(drawer)");
        } else {
          router.replace("/onboarding");
        }
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, [loading, profile]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        {/* Glow */}
<View
  style={[
    styles.glow,
    {
      width: glowSize,
      height: glowSize,
      borderRadius: glowSize / 2,
    },
  ]}
/>
        {/* Logo */}
        <Image
          source={require("@/assets/images/quran-splash.png")}
          style={{
            width: logoSize,
            height: logoSize,
            resizeMode: "contain",
          }}
        />

        {/* Loading Dots */}
        <View style={styles.loading}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </Animated.View>

      {/* Version */}
      <Animated.Text
        style={[
          styles.version,
          {
            opacity,
          },
        ]}
      >
        Version 1.0.0
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    justifyContent: "center",
    alignItems: "center",
  },

  glow: {
    position: "absolute",
    
    backgroundColor: "#C8E6C9",
    opacity: 0.45,
  },

  logo: {
    
    
    resizeMode: "contain",
  },

  loading: {
    flexDirection: "row",
    marginTop: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#1C4033",
    marginHorizontal: 5,
  },

  version: {
    position: "absolute",
    bottom: 45,
    color: "#9CA3AF",
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
