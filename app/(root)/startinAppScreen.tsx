import { COLORS } from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import StartLOGO from "@/assets/images/startLogo.png";
import StartLOGO2 from "@/assets/images/startLogo2.png";
import CommonButton from "@/components/button";
import { useRouter } from "expo-router";
import { wp } from "@/enums/StyleGuide";
import { LinearGradient } from "expo-linear-gradient";

const StartinAppScreen = () => {
  const router = useRouter();
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGradient(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {showGradient ? (
        <LinearGradient
          colors={[COLORS.secondary.main, COLORS.secondary.secondaryVoilet]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          <Content router={router} showGradient={showGradient} />
        </LinearGradient>
      ) : (
        <View
          style={[styles.container2, { backgroundColor: COLORS.light.main }]}
        >
          <Content router={router} showGradient={showGradient} />
        </View>
      )}
    </View>
  );
};

const Content = ({ router, showGradient }: any) => (
  <>
    <Image source={showGradient ? StartLOGO2 : StartLOGO} />
    <View style={styles.Btn}>
      <CommonButton
        title="Get Started"
        onPress={() => router.replace("onboardingScreen")}
      />
    </View>
  </>
);

export default StartinAppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Btn: {
    position: "absolute",
    bottom: 10,
    width: wp(80),
  },
});
