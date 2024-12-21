import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { hp, wp } from "@/enums/StyleGuide";
import { Spacer } from "./spacer";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  placeholder: string;
  icons: any;
};
const CustomInputField = ({ placeholder, icons }: Props) => {
  return (
    <View style={styles.inputBox}>
      <Ionicons name={icons} size={25} color={COLORS.gray.lightGray} />
      <Spacer width={wp(3)} />
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default CustomInputField;

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: COLORS.gray.lightestGray,
    // width: wp(90),
    padding: hp(1.5),
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: wp(60),
  },
});
