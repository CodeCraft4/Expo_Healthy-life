import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Spacer } from "@/components/spacer";
import { hp, wp } from "@/enums/StyleGuide";
import CustomInputField from "@/components/inputFields";
import CommonButton from "@/components/button";
import OrImg from "@/assets/images/or.png";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import { router } from "expo-router";

const LogInScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Spacer height={hp(3)} />
      <Text style={styles.hi}>Hey there,</Text>
      <Text style={styles.title}>Welcome Back</Text>
      <Spacer height={hp(8)} />
      <View>
        <CustomInputField placeholder="Email" icons={"mail-outline"} />
        <Spacer height={hp(2)} />
        <CustomInputField placeholder="Password" icons={"lock-open"} />
        <Spacer height={hp(2)} />
        <TouchableOpacity>
          <Text style={styles.underline}>Forget your password?</Text>
        </TouchableOpacity>
        <Spacer height={hp(26)} />
        <CommonButton
          title="Login"
          onPress={() => router.replace("welcomeScreen")}
        />
        <Spacer height={hp(2)} />
        <Image source={OrImg} style={styles.orImage} />
        <Spacer height={hp(2)} />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button}>
          <AntDesign name={"google"} size={35} color={"red"} />
        </TouchableOpacity>
        <Spacer width={wp(6)} />
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="facebook" size={35} color={"#1877F2"} />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(2)} />
      <Text style={styles.account}>
        Don't have an account yet?{" "}
        <Text
          style={styles.logIn}
          onPress={() => router.replace("signupScreen")}
        >
          Register
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    padding: wp(3),
    backgroundColor: COLORS.light.main,
    height: hp(100),
  },
  hi: {
    color: COLORS.dark.main,
    fontSize: wp(5),
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
  },
  section: {
    flexDirection: "row",
  },
  paragraph: {
    fontSize: 16,
    color: COLORS.gray.lightGray,
    width: wp(80),
  },
  checkbox: {
    margin: 8,
  },
  underline: {
    textDecorationLine: "underline",
    color: COLORS.gray.main,
    textAlign: "center",
  },
  orImage: {
    width: wp(90),
  },
  btnContainer: {
    flexDirection: "row",
    margin: "auto",
  },
  button: {
    borderRadius: 15,
    width: wp(15),
    height: hp(7),
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderWidth: 1,
    borderColor: COLORS.gray.lightGray,
  },
  account: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  logIn: {
    color: COLORS.secondary.main,
  },
});
