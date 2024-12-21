import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants/Colors";
import { hp } from "@/enums/StyleGuide";

type Props = {
  title: string;
  onPress?: () => void | boolean;
  height?: number;
  greenGradient?: boolean;
};
export default function CommonButton({
  title,
  onPress,
  height,
  greenGradient,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={
          greenGradient
            ? [COLORS.green.main, COLORS.green.aquaGreen]
            : ["#6A00FF", "#A259FF"]
        }
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={[styles.gradientTextContainer, { height: height ? height : 70 }]}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientTextContainer: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.light.main,
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 1,
  },
});
