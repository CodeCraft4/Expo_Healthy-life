import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import WaterGlassIcon from "@/assets/images/waterGlass.png";
import FootStep from "@/assets/images/footStep.png";
import { Spacer } from "./spacer";
const ActivityTarget = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>ActivityTarget</Text>
      <Spacer height={hp(3)} />
      <View style={styles.title}>
        <View style={styles.water}>
          <Image source={WaterGlassIcon} style={styles.icon} />
          <Spacer />
          <View>
            <Text style={styles.value}>8L</Text>
            <Spacer />
            <Text style={styles.name}>Water Intake</Text>
          </View>
        </View>
        <View style={styles.water}>
          <Image source={FootStep} style={styles.icon} />
          <Spacer />
          <View>
            <Text style={styles.value}>2400</Text>
            <Spacer />
            <Text style={styles.name}>Foot Steps</Text>
          </View>
        </View>
      </View>
      <Spacer height={hp(2)} />
    </View>
  );
};

export default ActivityTarget;

const styles = StyleSheet.create({
  container: {
    padding: wp(3),
    borderRadius: 20,
    backgroundColor: COLORS.primary.lightPink,
    opacity: 0.8,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "800",
  },
  water: {
    backgroundColor: COLORS.light.main,
    borderRadius: 15,
    flexDirection: "row",
    padding: wp(2),
  },
  icon: {
    height: hp(7),
    width: wp(10),
  },
  value: {
    fontSize: 20,
    fontWeight: "800",
    color: COLORS.primary.main,
  },
  name: {
    fontSize: 15,
    color: COLORS.gray.main,
  },
});
