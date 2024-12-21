import React from "react";
import { View, StyleSheet } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import { COLORS } from "@/constants/Colors";
import { wp } from "@/enums/StyleGuide";

const ActivityProgressCharts = () => {
  const barData = [
    { value: 250, label: "M" },
    { value: 500, label: "T" },
    { value: 250, label: "W" },
    { value: 400, label: "T" },
    { value: 600, label: "F" },
    { value: 186, label: "S" },
    { value: 300, label: "S" },
  ];

  return (
    <View style={styles.container}>
      <BarChart
        barWidth={25}
        noOfSections={4}
        isAnimated
        barBorderRadius={20}
        animationDuration={1800}
        yAxisThickness={0}
        xAxisThickness={0}
        color={COLORS.green.main}
        data={barData}
        hideRules
        showGradient
        gradientColor={COLORS.green.main}
        frontColor={COLORS.primary.primaryVoilet}
        labelTextStyle={styles.labelText}
        customBarRender={({ x, y, width, height }: any) => {
          return (
            <Rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={width / 2}
              fill="url(#grad)"
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.main,
    padding: wp(4),
    borderRadius: 16,
    shadowColor: COLORS.gray.main,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 9,
  },
  labelText: {
    fontSize: 12,
    color: COLORS.green.aquaGreen,
  },
});

export default ActivityProgressCharts;
