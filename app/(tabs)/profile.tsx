import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import Header from "@/components/pageHeader";
import { Spacer } from "@/components/spacer";
import UserProfile from "@/components/userProfile";
import AccountInfo from "@/components/accountInfo";
import NotificationToggle from "@/components/notificationToggle";
import { ScrollView } from "react-native";
import OthersLinks from "@/components/otherLink";
import CommonButton from "@/components/button";

const profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Header title="Profile" />
      <Spacer height={hp(4)} />
      <UserProfile />
      <Spacer height={hp(4)} />
      <AccountInfo />
      <Spacer height={hp(4)} />
      <NotificationToggle />
      <Spacer height={hp(3)} />
      <OthersLinks />
      <Spacer height={hp(3)} />
      <View style={styles.Btn}>
        <CommonButton title="Log out" height={50} greenGradient={true} />
      </View>
      <Spacer height={hp(7)} />
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    padding: wp(3),
    height: hp(100),
    backgroundColor: COLORS.gray.lightestGray,
    width: wp(100),
  },
  Btn: {
    width: wp(30),
  },
});
