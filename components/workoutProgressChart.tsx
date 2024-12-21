import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LineChart } from "react-native-gifted-charts";
import { COLORS } from "@/constants/Colors";

const WorkoutProgressChart = () => {
  const data1 = [
    { value: 70 },
    { value: 36 },
    { value: 50 },
    { value: 40 },
    { value: 18 },
    { value: 38 },
  ];
  const data2 = [
    { value: 50 },
    { value: 10 },
    { value: 45 },
    { value: 30 },
    { value: 45 },
    { value: 18 },
  ];
  return (
    <View
      style={{
        paddingVertical: 30,
        backgroundColor: COLORS.light.main,
      }}
    >
      <LineChart
        areaChart
        curved
        data={data1}
        data2={data2}
        hideDataPoints
        spacing={68}
        color1={COLORS.primary.main}
        color2={COLORS.secondary.main}
        startFillColor1={COLORS.primary.lightPink}
        startFillColor2={COLORS.secondary.secondaryVoilet}
        endFillColor1="#8a56ce"
        endFillColor2="#56acce"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={4}
        isAnimated
        animationDuration={1200}
        yAxisColor="transparent"
        yAxisThickness={0}
        rulesType="transparent"
        rulesColor="transparent"
        yAxisTextStyle={{ color: "gray" }}
        yAxisLabelSuffix="%"
        xAxisColor="transparent"
        pointerConfig={{
          pointerStripUptoDataPoint: true,
          pointerStripColor: "lightgray",
          pointerStripWidth: 2,
          strokeDashArray: [2, 5],
          pointerColor: COLORS.primary.lightPink,
          radius: 4,
          pointerLabelWidth: 100,
          pointerLabelHeight: 120,
          pointerLabelComponent: (items: any) => {
            return (
              <View
                style={{
                  height: 50,
                  width: 100,
                  backgroundColor: "#282C3E",
                  borderRadius: 4,
                  justifyContent: "center",
                  paddingLeft: 16,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {items[0].value}
                </Text>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {items[1].value}
                </Text>
              </View>
            );
          },
        }}
      />
    </View>
  );
};

export default WorkoutProgressChart;

const styles = StyleSheet.create({});
