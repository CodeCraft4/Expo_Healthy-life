import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { wp, hp } from "@/enums/StyleGuide";
import { Spacer } from "./spacer";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";

// Dummy data for popular foods
const popularFoodsData = [
  {
    id: 1,
    image: require("@/assets/images/popularFood1.png"),
    activity: "Drinking 300ml Water",
    time: "Medium | 10mins | 230kCal",
  },
  {
    id: 2,
    image: require("@/assets/images/popularFood2.png"),
    activity: "Eating a Healthy Snack",
    time: "Slow | 30mins | 330kCal",
  },
  {
    id: 3,
    image: require("@/assets/images/popularFood1.png"),
    activity: "Having a Protein Shake",
    time: "Medium | 50mins | 430kCal",
  },
  {
    id: 4,
    image: require("@/assets/images/popularFood2.png"),
    activity: "Having a Protein Shake",
    time: "Medium | 50mins | 430kCal",
  },
  {
    id: 5,
    image: require("@/assets/images/popularFood2.png"),
    activity: "Having a Protein Shake",
    time: "Medium | 50mins | 430kCal",
  },
];

const PopularFoods = () => {
  return (
    <View>
      <Text style={styles.title}>Popular</Text>
      <Spacer height={hp(4)} />
      {popularFoodsData.map((item) => (
        <View key={item.id} style={styles.latestTaBs}>
          <View style={styles.inside}>
            <Image source={item.image} style={styles.food} />
            <Spacer />
            <View>
              <Text style={styles.activityName}>{item.activity}</Text>
              <Text>{item.time}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.arrow}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color={COLORS.primary.lightPink}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default PopularFoods;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  inside: {
    flexDirection: "row",
    alignItems: "center",
  },
  latestTaBs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(95),
    marginBottom: hp(2),
    backgroundColor: COLORS.light.main,
    padding: wp(5),
    borderRadius: 15,
    elevation: 9,
    shadowColor: COLORS.gray.lightGray,
  },
  food: {
    height: hp(7),
    width: wp(14),
  },
  activityName: {
    fontSize: 18,
    fontWeight: "600",
  },
  arrow: {
    borderWidth: 1,
    borderColor: COLORS.primary.lightPink,
    borderRadius: 30,
  },
});
