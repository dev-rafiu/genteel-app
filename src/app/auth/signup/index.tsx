import SignupScreen from "@/src/screens/auth/signup";
import { StatusBar } from "expo-status-bar";

function SignupPage() {
  return (
    <>
      <StatusBar style="light" />
      <SignupScreen />
    </>
  );
}

export default SignupPage;
