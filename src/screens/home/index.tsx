import { FontFamily } from "@/src/constants/Typography";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-col gap-[50px] w-full pt-48 text-center px-5">
        <Text style={{ fontFamily: FontFamily.loraMedium }}>Home screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
