import { useState } from "react";
import StartinAppScreen from "./(root)/startinAppScreen";
import WelcomeScreen from "./(root)/welcomeScreen";

export default function MainApp() {
  const [user, setUser] = useState(false);

  return !user ? <StartinAppScreen /> : <WelcomeScreen />;
}
