import { wp } from "@/enums/StyleGuide";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Spacer } from "./spacer";
import { COLORS } from "@/constants/Colors";
import Diet1 from "@/assets/images/diet1.png";
import Diet2 from "@/assets/images/diet2.png";
import Diet3 from "@/assets/images/diet1.png";
import Diet4 from "@/assets/images/diet2.png";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CommonButton from "./button";

const category = [
  {
    id: 1,
    poster: Diet1,
    colors: ["#A1FFCE", "#FAFFD1"],
    title: "Honey Pancake",
    calaries: "Easy | 30mins | 180kCal",
    gradient: true,
  },
  {
    id: 2,
    poster: Diet2,
    colors: ["#E0C3FC", "#8EC5FC"],
    title: "Canai Bread",
    calaries: "Easy | 20mins | 160kCal",
    gradient: false,
  },
  {
    id: 3,
    poster: Diet3,
    colors: ["#A1FFCE", "#FAFFD1"],
    title: "Honey Pancake",
    calaries: "Easy | 30mins | 180kCal",
    gradient: true,
  },
  {
    id: 4,
    poster: Diet4,
    colors: ["#E0C3FC", "#8EC5FC"],
    title: "Canai Bread",
    calaries: "Easy | 20mins | 160kCal",
    gradient: false,
  },
];

const RecommendDiet = () => {
  return (
    <View>
      <Text style={styles.title}>Recommendation for Diet</Text>
      <Spacer />
      <ScrollView
        horizontal
        style={styles.categories}
        showsHorizontalScrollIndicator={false}
      >
        {category.map((item) => (
          <TouchableOpacity key={item.id}>
            <LinearGradient
              key={item.id}
              colors={item.colors}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.gradient}
            >
              <Image source={item.poster} style={styles.image} />
              <Spacer />
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <Text style={styles.calaries}>{item.calaries}</Text>
              <Spacer />
              <View style={styles.Btn}>
                <CommonButton
                  title="View"
                  height={50}
                  greenGradient={item.gradient}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecommendDiet;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 16,
    width: wp(50),
  },
  categories: {
    flexDirection: "row",
  },
  gradient: {
    width: wp(50),
    borderRadius: 18,
    padding: 10,
    marginBottom: 16,
    alignItems: "center",
    marginRight: wp(4),
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.dark.main,
    opacity: 1,
  },
  calaries: {
    color: COLORS.gray.main,
  },
  Btn: {
    width: wp(25),
  },
});
