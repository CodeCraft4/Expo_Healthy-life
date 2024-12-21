import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  Zocial,
} from "@expo/vector-icons";
import { Spacer } from "./spacer";

const accountLink = [
  {
    id: 1,
    icon: (
      <Ionicons name="person-outline" size={30} color={COLORS.green.main} />
    ),
    title: "Personla Data",
  },
  {
    id: 2,
    icon: (
      <MaterialCommunityIcons
        name="file-document"
        size={30}
        color={COLORS.green.main}
      />
    ),
    title: "Achievement",
  },
  {
    id: 3,
    icon: <Feather name="pie-chart" size={30} color={COLORS.green.main} />,
    title: "Activity History",
  },
  {
    id: 4,
    icon: <Octicons name="graph" size={30} color={COLORS.green.main} />,
    title: "Workout Progress",
  },
];

const AccountInfo = () => {
  return (
    <View style={styles.Box}>
      <Text style={styles.Title}>Account</Text>
      <Spacer height={hp(2)} />
      {accountLink.map((item) => (
        <TouchableOpacity key={item.id} style={styles.link}>
          <View style={styles.leftSide}>
            {item.icon}
            <Spacer width={wp(3)} />
            <Text style={styles.linkStyle}>{item.title}</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color={COLORS.gray.lightGray}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  Box: {
    padding: wp(6),
    borderRadius: 15,
    backgroundColor: COLORS.light.main,
    elevation: 9,
    shadowColor: COLORS.gray.lightGray,
  },
  Title: {
    fontSize: 25,
    fontWeight: "800",
  },
  link: {
    flexDirection: "row",
    width: wp(85),
    justifyContent: "space-between",
    marginBottom: hp(1.5),
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  linkStyle: {
    color: COLORS.gray.main,
    fontSize: 16,
  },
});
