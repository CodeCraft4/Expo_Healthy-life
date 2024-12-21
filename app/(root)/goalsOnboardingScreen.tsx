import React, { useRef, useState } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import { GOALS_ONBOARDING_SCREEN } from "@/constants/data";
import { Spacer } from "@/components/spacer";
import { hp, wp } from "@/enums/StyleGuide";
import CommonButton from "@/components/button";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";

const GoalsOnboardingScreen = () => {
  const router = useRouter();
  const Slide = ({ item }: any) => (
    <View>
      <View style={styles.text}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <Spacer />
      <Image source={item.poster} style={styles.img} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={GOALS_ONBOARDING_SCREEN}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.next} />
      <View style={styles.prev} />
      <View style={styles.Btn}>
        <CommonButton
          title="Confirm"
          onPress={() => router.replace("loginScreen")}
        />
      </View>
    </View>
  );
};

export default GoalsOnboardingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.main,
    height: hp(100),
  },
  slide: {
    width: wp(95),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(5),
    borderRadius: 30,
  },
  img: {
    width: wp(95),
    height: hp(75),
    flexDirection: "row",
    margin: "auto",
  },
  text: {
    width: wp(100),
    position: "relative",
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.dark.main,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    color: COLORS.gray.lightGray,
    fontWeight: "300",
    textAlign: "center",
    width: wp(60),
    flexDirection: "row",
    margin: "auto",
  },
  Btn: {
    padding: hp(4),
  },
  next: {
    position: "absolute",
    right: 0,
    top: hp(20),
    height: hp(60),
    width: wp(6),
    backgroundColor: COLORS.primary.lightPink,
    zIndex: 99,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  prev: {
    position: "absolute",
    left: 0,
    top: hp(20),
    height: hp(60),
    width: wp(6),
    backgroundColor: COLORS.primary.lightPink,
    zIndex: 99,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
