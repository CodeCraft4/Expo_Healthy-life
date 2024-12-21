import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import Header from "@/components/pageHeader";
import { Spacer } from "@/components/spacer";
import ActivityTarget from "@/components/activityTarget";
import CheckSchedule from "@/components/checkSchedule";
import LatestActivity from "@/components/latestActivity";
import { ScrollView } from "react-native";
import ActivityProgressCharts from "@/components/activityProgressChart";

const activity = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Activity Tracker" />
      <Spacer height={hp(3)} />
      <ActivityTarget />
      <Spacer height={hp(3)} />
      <CheckSchedule title="Activity Progress" />
      <Spacer height={hp(3)} />
      <ActivityProgressCharts />
      <Spacer height={hp(3)} />
      <LatestActivity />
      <Spacer height={hp(7)} />
    </ScrollView>
  );
};

export default activity;

const styles = StyleSheet.create({
  container: {
    padding: wp(3),
    height: hp(100),
    backgroundColor: COLORS.light.main,
  },
  progressImg: {
    width: wp(90),
    height: hp(40),
    flexDirection: "row",
  },
});
