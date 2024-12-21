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
import Checkbox from "expo-checkbox";
import { COLORS } from "@/constants/Colors";
import CommonButton from "@/components/button";
import OrImg from "@/assets/images/or.png";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router: any = useRouter();
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={styles.page}>
      <Text style={styles.hi}>Hey there,</Text>
      <Text style={styles.title}>Create an Account</Text>
      <Spacer height={hp(4)} />
      <View>
        <CustomInputField placeholder="Full Name" icons={"person-outline"} />
        <Spacer height={hp(2)} />
        <CustomInputField placeholder="Phone Number" icons={"call-outline"} />
        <Spacer height={hp(2)} />
        <CustomInputField placeholder="Email" icons={"mail-outline"} />
        <Spacer height={hp(2)} />
        <CustomInputField placeholder="Password" icons={"lock-open"} />
        <Spacer height={hp(2)} />
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={
              isChecked ? COLORS.primary.primaryVoilet : COLORS.gray.lightGray
            }
          />
          <Text style={styles.paragraph}>
            By continuing you accept our{" "}
            <Text style={styles.underline}>Privacy Policy</Text> and{" "}
            <Text style={styles.underline}>Term of Use</Text>
          </Text>
        </View>
        <Spacer height={hp(6)} />
        <CommonButton
          title="Register"
          onPress={() => router.replace("completeProfile")}
        />
        <Spacer height={hp(3)} />
        <Image source={OrImg} style={styles.orImage} />
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
        Already have account?{" "}
        <Text
          style={styles.logIn}
          onPress={() => router.replace("loginScreen")}
        >
          Login
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    padding: wp(3),
    backgroundColor: COLORS.light.main,
    height:hp(100)
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
    color: COLORS.gray.lightGray,
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
