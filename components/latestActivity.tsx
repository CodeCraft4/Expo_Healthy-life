import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { wp, hp } from "@/enums/StyleGuide";
import { Spacer } from "./spacer";
import LatestActivityImg from "@/assets/images/userImg.png";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";

// Dummy data for latest activities
const latestActivities = [
  {
    id: 1,
    image: LatestActivityImg,
    activity: "Drinking 300ml Water",
    time: "About 3 minutes ago",
  },
  {
    id: 2,
    image: LatestActivityImg,
    activity: "Running for 15 minutes",
    time: "About 10 minutes ago",
  },
  {
    id: 3,
    image: LatestActivityImg,
    activity: "Completed Yoga Session",
    time: "About 30 minutes ago",
  },
];

const LatestActivity = () => {
  return (
    <View>
      <View style={styles.head}>
        <Text style={styles.title}>Latest Activity</Text>
        <Text>See more</Text>
      </View>
      <Spacer height={hp(4)} />
      {latestActivities.map((item) => (
        <View key={item.id} style={styles.latestTaBs}>
          <View style={styles.inside}>
            <Image source={item.image} />
            <Spacer />
            <View>
              <Text style={styles.activityName}>{item.activity}</Text>
              <Text>{item.time}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Entypo
              name="dots-three-vertical"
              size={20}
              color={COLORS.gray.lightGray}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default LatestActivity;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "800",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp(90),
  },
  inside: {
    flexDirection: "row",
  },
  latestTaBs: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(95),
    marginBottom: hp(2),
    backgroundColor: COLORS.gray.lightestGray,
    padding: wp(3),
    borderRadius: 15,
    elevation: 3,
    shadowColor: COLORS.gray.main,
  },
  activityName: {
    fontSize: 18,
    fontWeight: "600",
  },
});
