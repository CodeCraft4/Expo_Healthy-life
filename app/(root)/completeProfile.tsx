import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CompleteProfileImg from "@/assets/images/completeProflieImg.png";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import { Spacer } from "@/components/spacer";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import CustomInputField from "@/components/inputFields";
import { LinearGradient } from "expo-linear-gradient";
import CommonButton from "@/components/button";
import { useRouter } from "expo-router";

const data = [{ label: "Male" }, { label: "Female" }, { label: "Transgender" }];
const CompleteProfile = () => {
  const router: any = useRouter();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{ height: hp(90) }}>
      <Image source={CompleteProfileImg} style={styles.cmImage} />
      <View style={styles.text}>
        <Text style={styles.title}>Let’s complete your profile</Text>
        <Text style={styles.description}>
          It will help us to know more about you!
        </Text>
        <Spacer height={hp(2)} />
        <View style={styles.container}>
          <Dropdown
            style={isFocus && { borderColor: "blue" }}
            data={data}
            maxHeight={300}
            labelField="label"
            placeholder={!isFocus ? "Choose a Gender" : "..."}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={() => {
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <Ionicons
                style={styles.icon}
                color={isFocus ? COLORS.primary.main : COLORS.gray.lightGray}
                name="person-outline"
                size={25}
              />
            )}
          />
        </View>
        <Spacer height={hp(2)} />
        <CustomInputField placeholder="Date of Birth" icons={"calendar"} />
        <Spacer height={hp(2)} />
        <View style={styles.input}>
          <CustomInputField placeholder="Your Weight" icons={"calendar"} />
          <Spacer width={wp(2)} />
          <LinearGradient
            colors={[COLORS.secondary.main, COLORS.secondary.secondaryVoilet]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientTextContainer}
          >
            <Text style={styles.wieghtText}>KG</Text>
          </LinearGradient>
        </View>
        <Spacer height={hp(2)} />
        <View style={styles.input}>
          <CustomInputField placeholder="Your Weight" icons={"calendar"} />
          <Spacer width={wp(3)} />
          <LinearGradient
            colors={[COLORS.secondary.main, COLORS.secondary.secondaryVoilet]}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 1 }}
            style={styles.gradientTextContainer}
          >
            <Text style={styles.wieghtText}>CM</Text>
          </LinearGradient>
        </View>
        <Spacer height={hp(4)} />
        <CommonButton
          title="Next"
          onPress={() => router.replace("goalsOnboardingScreen")}
        />
      </View>
    </View>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  cmImage: {
    width: wp(90),
    flexDirection: "row",
    margin: "auto",
    marginTop: hp(-9),
  },
  text: {
    padding: wp(4),
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
    color: COLORS.dark.main,
  },
  description: {
    textAlign: "center",
    color: COLORS.gray.main,
  },
  container: {
    backgroundColor: COLORS.gray.lightestGray,
    padding: hp(2.5),
    borderRadius: 10,
  },
  icon: {
    marginRight: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  gradientTextContainer: {
    padding: hp(1.5),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
  },
  input: {
    flexDirection: "row",
  },
  wieghtText: {
    color: COLORS.light.main,
    fontWeight: "800",
  },
});
