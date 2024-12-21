import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "@/constants/Colors";
import { hp, wp } from "@/enums/StyleGuide";
import { Ionicons } from "@expo/vector-icons";
import { Spacer } from "@/components/spacer";
import Banner1 from "@/assets/images/banner1.png";
import WaterGraph from "@/assets/images/waterGraph.png";
import CheckSchedule from "@/components/checkSchedule";
import { useRouter } from "expo-router";
import ActivityStatusChart from "@/components/activityStatus";
import WorkoutProgressChart from "@/components/workoutProgressChart";

const HomeScreen = () => {
  const router: any = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Back}>Welcome Back,</Text>
      <Spacer />
      <View style={styles.user}>
        <Text style={styles.userName}>Masi Ramezanzade</Text>
        <TouchableOpacity
          style={styles.notification}
          onPress={() => router.replace("notifications")}
        >
          <Ionicons name="notifications-outline" size={30} />
        </TouchableOpacity>
      </View>
      <Spacer height={hp(3)} />
      <TouchableOpacity>
        <Image source={Banner1} style={styles.Banner} resizeMode="contain" />
      </TouchableOpacity>
      <Spacer height={hp(2)} />
      <CheckSchedule title={"Today Target"} />
      <Spacer height={hp(5)} />
      <ActivityStatusChart />
      <Spacer height={hp(5)} />
      <Image source={WaterGraph} style={styles.WaterGraph} />
      <Spacer height={hp(5)} />
      <CheckSchedule title="Workout Progress" />
      <Spacer height={hp(2)} />
      <WorkoutProgressChart/>
      <Spacer height={hp(8)} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.main,
    height: hp(100),
    padding: wp(3),
  },
  user: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(95),
    alignItems: "center",
  },
  userName: {
    fontSize: 25,
    fontWeight: "700",
    color: COLORS.dark.main,
  },
  Back: {
    color: COLORS.gray.main,
    letterSpacing: 0.5,
    fontSize: 15,
  },
  Banner: {
    width: wp(94),
    height: hp(26),
  },
  notification: {
    padding: hp(1),
    backgroundColor: COLORS.gray.lightestGray,
    borderRadius: 15,
  },
  WaterGraph: {
    width: wp(100),
    height: hp(50),
  },
  progressImg: {
    width: wp(80),
    height: hp(20),
    flexDirection: "row",
    margin: "auto",
  },
});
