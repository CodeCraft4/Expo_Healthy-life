import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import Header from "@/components/pageHeader";
import { Spacer } from "@/components/spacer";
import SearchFilter from "@/components/searchFilter";
import SearchByCategory from "@/components/searchByCategory";
import RecommendDiet from "@/components/recommendationDiet";
import LatestActivity from "@/components/latestActivity";
import PopularFoods from "@/components/popularFoods";

const Search = () => {
  return (
    <ScrollView style={styles.home}>
      <Header title="Breakfast" />
      <Spacer height={hp(3)} />
      <SearchFilter />
      <Spacer height={hp(1)} />
      <Spacer height={hp(1)} />
      <SearchByCategory />
      <Spacer height={hp(2)} />
      <RecommendDiet />
      <Spacer height={hp(2)} />
      <PopularFoods />
      <Spacer height={hp(6)} />
    </ScrollView>
  );
};

export default Search;

const styles = StyleSheet.create({
  home: {
    padding: wp(3),
    backgroundColor: COLORS.light.main,
    height: hp(100),
  },
  text: {
    fontSize: 30,
    fontWeight: "800",
    color: "red",
  },
});
