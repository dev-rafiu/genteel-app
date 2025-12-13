import WelcomeScreen from "@/src/screens/auth/welcome";
import { StatusBar } from "expo-status-bar";

function AuthPage() {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeScreen />
    </>
  );
}

export default AuthPage;
