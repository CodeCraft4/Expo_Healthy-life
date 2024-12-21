import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const HomeStack = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <StatusBar hidden={true}/>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" />
    </Stack>
  );
};

export default HomeStack;
