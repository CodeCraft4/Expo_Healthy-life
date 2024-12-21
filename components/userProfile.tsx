import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import UserImag from "@/assets/images/userImg.png";
import CommonButton from "./button";
import { hp, wp } from "@/enums/StyleGuide";
import { Spacer } from "./spacer";
import { COLORS } from "@/constants/Colors";
import { LinearTextGradient } from "react-native-text-gradient";

const UserProfile = () => {
  return (
    <View>
      <View style={styles.userProfile}>
        <View style={styles.leftSide}>
          <Image source={UserImag} />
          <Spacer width={wp(3)} />
          <View>
            <Text style={styles.userName}>Masi Ramezanzade</Text>
            <Text style={styles.bio}>Lose a Fat Program</Text>
          </View>
        </View>
        <View style={styles.Btn}>
          <CommonButton title="Edit" height={50} />
        </View>
      </View>
      <Spacer height={hp(5)} />
      <View style={styles.about}>
        <View style={styles.aboutBox}>
          <Text style={styles.value}>180cm</Text>
          <Text style={styles.name}>Height</Text>
        </View>
        <View style={styles.aboutBox}>
          <Text style={styles.value}>65kg</Text>
          <Text style={styles.name}>Weight</Text>
        </View>
        <View style={styles.aboutBox}>
          <Text style={styles.value}>22yo</Text>
          <Text style={styles.name}>Age</Text>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(95),
    justifyContent: "space-between",
  },
  Btn: {
    width: wp(25),
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
  },
  bio: {
    color: COLORS.gray.main,
    fontSize: 14,
  },
  about: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(4),
    justifyContent: "space-around",
  },
  aboutBox: {
    padding: hp(3),
    width: wp(28),
    borderRadius: 15,
    backgroundColor: COLORS.light.main,
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "column",
    elevation: 7,
    shadowColor: COLORS.gray.lightGray,
  },
  value: {
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    color: COLORS.secondary.main,
  },
  name: {
    color: COLORS.gray.main,
    textAlign: "center",
  },
  gradientBox: {
    padding: hp(2), // Adjust padding as needed
    borderRadius: 15, // Match the radius of the aboutBox
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
});
