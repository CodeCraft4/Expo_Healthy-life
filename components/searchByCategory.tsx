import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FoodByCategory1 from "@/assets/images/food1.png";
import FoodByCategory2 from "@/assets/images/food2.png";
import FoodByCategory3 from "@/assets/images/food3.png";
import FoodByCategory4 from "@/assets/images/food4.png";
import { COLORS } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Spacer } from "./spacer";
import { wp } from "@/enums/StyleGuide";

const category = [
  {
    id: 1,
    poster: FoodByCategory1,
    colors: ["#E0C3FC", "#8EC5FC"],
    title: "Salad",
  },
  {
    id: 2,
    poster: FoodByCategory2,
    colors: ["#A1FFCE", "#FAFFD1"],
    title: "Cake",
  },
  {
    id: 3,
    poster: FoodByCategory3,
    colors: ["#E0C3FC", "#8EC5FC"],
    title: "Pie",
  },
  {
    id: 4,
    poster: FoodByCategory4,
    colors: ["#A1FFCE", "#FAFFD1"],
    title: "Salad",
  },
  {
    id: 5,
    poster: FoodByCategory2,
    colors: ["#E0C3FC", "#8EC5FC"],

    title: "Milk",
  },
  {
    id: 6,
    poster: FoodByCategory4,
    colors: ["#A1FFCE", "#FAFFD1"],
    title: "Meal",
  },
];

const SearchByCategory = () => {
  return (
    <View>
      <Text style={styles.title}>Category</Text>
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
              <Spacer />
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchByCategory;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 16,
  },
  categories: {
    flexDirection: "row",
  },
  gradient: {
    width: wp(25),
    borderRadius: 18,
    padding: 10,
    marginBottom: 16,
    alignItems: "center",
    marginRight: wp(4),
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.dark.main,
    opacity: 1,
  },
});
