import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Svg, { Circle } from "react-native-svg";
import { ONBOARDING_SCREEN } from "@/constants/data";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { hp, wp } from "@/enums/StyleGuide";
import { useRouter } from "expo-router";

const OnboardingScreen = () => {
  const router: any = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const flatListRef: any = useRef(null);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  useEffect(() => {
    const progress = (currentIndex + 1) / ONBOARDING_SCREEN.length;

    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    setCurrentIndex(index);
  };

  const handleNextSlide = () => {
    if (currentIndex < ONBOARDING_SCREEN.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("signupScreen");
    }
  };

  const Slide = ({ item }: any) => (
    <View>
      <Image source={item.poster} style={styles.img} />
      <View style={styles.text}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const Stepper = () => {
    const circleSize = 70;
    const strokeWidth = 3;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const strokeDashoffset = progressAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [circumference, 0],
    });

    return (
      <TouchableOpacity
        style={styles.stepperContainer}
        onPress={handleNextSlide}
      >
        <Svg height={circleSize} width={circleSize}>
          <Circle
            stroke={COLORS.gray.lightestGray}
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <LinearGradient
            colors={[
              `${COLORS.primary.main}`,
              `${COLORS.primary.primaryVoilet}`,
            ]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.innerCircle}
          >
            <MaterialIcons name="arrow-forward-ios" size={20} color="white" />
          </LinearGradient>
          <AnimatedCircle
            stroke={COLORS.primary.primaryVoilet}
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={`${circumference}, ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
          />
        </Svg>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SCREEN}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <Stepper />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.light.main,
    height: hp(100),
  },
  slide: {
    width: wp(100),
    height: hp(100),
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(5),
    borderRadius: 30,
  },
  img: {
    width: wp(100),
    height: hp(50),
  },
  illustrationContainer: {
    width: wp(100),
    height: hp(100),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(3),
  },
  text: {
    width: wp(100),
    marginTop: hp(8),
    padding: wp(5),
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: COLORS.dark.main,
    paddingBottom: hp(2),
  },
  description: {
    fontSize: 18,
    color: COLORS.gray.lightGray,
    fontWeight: "300",
  },
  stepperContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    right: 10,
    position: "absolute",
    bottom: 0,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: COLORS.primary.main,
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary.main,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  nextButton: {
    position: "absolute",
    bottom: hp(5),
    right: wp(5),
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary.main,
    justifyContent: "center",
    alignItems: "center",
  },
});
