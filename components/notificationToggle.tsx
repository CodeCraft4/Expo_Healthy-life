import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Spacer } from "./spacer";
import { LinearGradient } from "expo-linear-gradient";

const NotificationToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.Box}>
      <Text style={styles.Title}>Notification</Text>
      <Spacer />
      <View style={styles.notify}>
        <View style={styles.notifyIcon}>
          <Ionicons
            name="notifications-outline"
            size={30}
            color={COLORS.green.main}
          />
          <Spacer width={wp(2)} />
          <Text style={styles.popup}>Pop-up Notification</Text>
        </View>

        {/* Custom Switch */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleSwitch}
          style={[
            styles.switchContainer,
            isEnabled ? styles.switchEnabled : styles.switchDisabled,
          ]}
        >
          <LinearGradient
            colors={
              isEnabled
                ? [COLORS.green.main, COLORS.green.aquaGreen]
                : [COLORS.gray.lightGray, COLORS.gray.main]
            }
            style={styles.gradientTrack}
          />
          <Animated.View
            style={[
              styles.thumb,
              { alignSelf: isEnabled ? "flex-end" : "flex-start" },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationToggle;

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
  notify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp(85),
  },
  notifyIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  popup: {
    fontSize: 16,
    color: COLORS.gray.main,
  },
  switchContainer: {
    width: wp(13),
    height: 25,
    borderRadius: 25,
    justifyContent: "center",
  },
  switchEnabled: {
    backgroundColor: COLORS.green.aquaGreen,
  },
  switchDisabled: {
    backgroundColor: COLORS.gray.lightGray,
  },
  gradientTrack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.light.main,
    elevation: 5,
    marginHorizontal: 3,
  },
});
