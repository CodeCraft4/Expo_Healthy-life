import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "@/enums/StyleGuide";
import { COLORS } from "@/constants/Colors";
import { Spacer } from "./spacer";
import { LineChart } from "react-native-gifted-charts";

const ActivityStatusChart = () => {
  const lineData = [
    { value: 0 },
    { value: 10 },
    { value: 20 },
    { value: 18 },
    { value: 40 },
    { value: 36 },
    { value: 60 },
    { value: 54 },
    { value: 85 },
    { value: 75 },
    { value: 90 },
    { value: 95 },
    { value: 105 },
    { value: 90 },
    { value: 95 },
    { value: 80 },
  ];
  return (
    <View>
      <Text style={styles.text}>ActivityStatus</Text>
      <Spacer height={hp(2)} />
      <View style={styles.status}>
        <LineChart
          areaChart
          data={lineData}
          isAnimated
          hideDataPoints
          width={wp(100)}
          animationDuration={1800}
          startFillColor={COLORS.secondary.secondaryVoilet}
          startOpacity={1}
          endOpacity={0.1}
          initialSpacing={0}
          spacing={25}
          thickness={3}
          hideRules
          hideYAxisText
          yAxisColor={"transparent"}
          xAxisColor={"transparent"}
          verticalLinesColor={"transparent"}
          color={COLORS.secondary.secondaryVoilet}
          yAxisTextStyle={{ color: "gray" }}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: "lightgray",
            pointerStripWidth: 2,
            pointerColor: "lightgray",
            radius: 6,
            pointerLabelWidth: 100,
            pointerLabelHeight: 90,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            pointerLabelComponent: (items: any) => {
              return (
                <View
                  style={{
                    height: 90,
                    width: 100,
                    justifyContent: "center",
                    marginTop: -30,
                    marginLeft: -40,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 14,
                      marginBottom: 6,
                      textAlign: "center",
                    }}
                  >
                    {items[0].date}
                  </Text>

                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 6,
                      borderRadius: 16,
                      backgroundColor: "white",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                      {"$" + items[0].value + ".0"}
                    </Text>
                  </View>
                </View>
              );
            },
          }}
        />
      </View>
    </View>
  );
};

export default ActivityStatusChart;

const styles = StyleSheet.create({
  status: {
    backgroundColor: COLORS.primary.lightPink,
    borderRadius: 25,
  },
  text: {
    fontSize: 25,
    fontWeight: "800",
  },
});
