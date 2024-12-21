import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: COLORS.light.main,
          height: 70,
          elevation: 8,
          alignItems: "center",
          shadowColor: "red",
          justifyContent: "center",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={focused ? COLORS.primary.main : COLORS.gray.lightGray}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                marginTop: 30,
              }}
            >
              <Ionicons
                name={focused ? "calendar-sharp" : "calendar-outline"}
                color={focused ? COLORS.primary.main : COLORS.gray.lightGray}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: () => (
            <LinearGradient
              colors={[
                `${COLORS.primary.main}`,
                `${COLORS.primary.primaryVoilet}`,
              ]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientTextContainer}
            >
              <Ionicons name="search" color={"white"} size={40} />
            </LinearGradient>
          ),
        }}
      />
      <Tabs.Screen
        name="photos"
        options={{
          title: "Photos",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <Ionicons
                name={focused ? "camera" : "camera-outline"}
                color={focused ? COLORS.primary.main : COLORS.gray.lightGray}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconStyle}>
              <Ionicons
                name={focused ? "person" : "person-outline"}
                color={focused ? COLORS.primary.main : COLORS.gray.lightGray}
                size={30}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  gradientTextContainer: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 90,
    marginTop: -20,
    backgroundColor: "white",
    elevation: 1,
    borderWidth:6,
    borderColor:COLORS.light.main,
  },
  iconStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    height: 50,
    marginTop: 20,
  },
});
