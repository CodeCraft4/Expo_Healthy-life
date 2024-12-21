import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import { useRouter } from "expo-router";

type Props = {
  title: string;
};
const Header = ({ title }: Props) => {
  const router: any = useRouter();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.Btn}
        onPress={() => router.push("(tabs)")}
      >
        <MaterialIcons name="keyboard-arrow-left" size={30} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.Btn}>
        <Entypo name="dots-two-horizontal" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(95),
  },
  Btn: {
    padding: hp(1),
    backgroundColor: COLORS.gray.lightestGray,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
  },
});
