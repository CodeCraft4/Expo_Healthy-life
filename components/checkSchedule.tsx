import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonButton from "./button";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";

type Props = {
  title: string;
};
const CheckSchedule = ({ title }: Props) => {
  const router:any = useRouter();
  return (
    <View style={styles.com}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.Btn}>
        <CommonButton
          title="Check"
          height={50}
          onPress={() => router.replace("activity")}
        />
      </View>
    </View>
  );
};

export default CheckSchedule;

const styles = StyleSheet.create({
  com: {
    padding: hp(2),
    flexDirection: "row",
    backgroundColor: COLORS.primary.lightPink,
    alignItems: "center",
    borderRadius: 26,
    justifyContent: "space-between",
    opacity: 0.7,
  },
  Btn: {
    width: wp(30),
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
  },
});
