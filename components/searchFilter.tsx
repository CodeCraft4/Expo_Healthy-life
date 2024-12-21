import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { hp, wp } from "@/enums/StyleGuide";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";

const SearchFilter = () => {
  return (
    <View style={styles.filterBox}>
      <AntDesign name="search1" size={30} color={COLORS.green.main} />
      <TextInput placeholder="Search Pancake" style={styles.input} />
      <Ionicons name="filter" size={30} color={COLORS.green.main} />
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  filterBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(95),
    backgroundColor: COLORS.light.main,
    elevation: 10,
    padding: hp(1.5),
    alignItems: "center",
    borderRadius: 15,
    shadowColor: COLORS.gray.lightGray,
  },
  input: {
    width: wp(60),
    borderRightWidth: 2,
    borderRightColor: COLORS.gray.lightGray,
  },
});
