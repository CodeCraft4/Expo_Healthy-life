import React from "react";
import { hp, wp } from "@/enums/StyleGuide";
import { Image, StyleSheet, Text, View } from "react-native";
import WelcomeLogo from "@/assets/images/welcome.png";
import { Spacer } from "@/components/spacer";
import { COLORS } from "@/constants/Colors";
import CommonButton from "@/components/button";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router: any = useRouter();
  return (
    <View style={{ height: hp(100) }}>
      <Image source={WelcomeLogo} style={styles.image} />
      <Spacer height={hp(5)} />
      <View style={styles.text}>
        <Text style={styles.title}>Welcome, User</Text>
        <Text style={styles.description}>
          You are all set now, let’s reach your goals together with us
        </Text>
        <Spacer height={hp(10)} />
        <CommonButton
          title="Got To Home"
          onPress={() => router.replace("(tabs)")}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    width: wp(100),
    height: hp(55),
    flexDirection: "row",
    margin: "auto",
  },
  text: {
    padding: wp(8),
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "800",
  },
  description: {
    fontSize: 16,
    color: COLORS.gray.lightGray,
    textAlign: "center",
    width: wp(70),
    flexDirection: "row",
    margin: "auto",
  },
});
