import SigninScreen from "@/src/screens/auth/signin";
import { StatusBar } from "expo-status-bar";

function SigninPage() {
  return (
    <>
      <StatusBar style="light" />
      <SigninScreen />
    </>
  );
}

export default SigninPage;
