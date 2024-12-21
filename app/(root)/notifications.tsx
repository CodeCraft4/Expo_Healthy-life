import Header from "@/components/pageHeader";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import { Spacer } from "@/components/spacer";

import Notification1 from "@/assets/images/notification1.png";
import Notification2 from "@/assets/images/notification2.png";
import Notification3 from "@/assets/images/notification3.png";
import Notification4 from "@/assets/images/notification4.png";
import Notification5 from "@/assets/images/notification5.png";
import Notification6 from "@/assets/images/notification6.png";

const notification = [
  {
    id: 1,
    poster: Notification1,
    title: "Hey, it’s time for lunch",
    time: "About 1 minute ago",
  },
  {
    id: 2,
    poster: Notification2,
    title: "Don’t miss your lower body workout",
    time: "About 3 hours ago",
  },
  {
    id: 4,
    poster: Notification3,
    title: "Hey, let’s add some meals for your b..",
    time: "About 3 hours ago",
  },
  {
    id: 5,
    poster: Notification4,
    title: "Congratulations, You have finished A..",
    time: "29 May",
  },
  {
    id: 3,
    poster: Notification5,
    title: "Hey, it’s time for lunch",
    time: "8 April",
  },
  {
    id: 6,
    poster: Notification6,
    title: "Ups, You have missed your Lowerbo...",
    time: "3 April",
  },
];

const Notifications = () => {
  return (
    <ScrollView style={styles.notification}>
      <Header title="Notification" />
      <View>
        <Spacer height={hp(4)} />
        {notification.map((e) => (
          <TouchableOpacity key={e.id} style={styles.notificationItem}>
            <Image source={e.poster} style={styles.poster} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{e.title}</Text>
              <Text style={styles.time}>{e.time}</Text>
            </View>
          </TouchableOpacity>
        ))}
        {/* <Entypo name="dots-three-vertical" /> */}
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notification: {
    padding: hp(2),
    height: hp(100),
    backgroundColor: COLORS.light.main,
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
    borderBottomWidth: 1,
    paddingBottom: hp(1),
    borderColor: COLORS.gray.main,
  },
  poster: {
    width: wp(15),
    height: wp(15),
    borderRadius: 10,
    marginRight: wp(3),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.dark.main,
  },
  time: {
    fontSize: 13,
    color: COLORS.gray.main,
  },
});
