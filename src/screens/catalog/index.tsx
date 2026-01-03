import { FontFamily } from "@/src/constants/Typography";
import { Feather, Ionicons } from "@expo/vector-icons";
import { View, ScrollView, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATALOG } from "@/src/data/catalog";
import { router } from "expo-router";

function CatalogScreen() {
  const handlePress = (id: string) => {
    router.push(`/(tabs)/(catalog)/${id}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white gap-6 px-5">
      {/* header */}
      <View className="flex-row items-center justify-between mt-5">
        <Text
          style={{ fontFamily: FontFamily.loraMedium }}
          className="text-2xl"
        >
          CATALOG
        </Text>

        <View className="flex-row gap-5">
          <Feather name="heart" size={24} color="black" />

          <View className="relative">
            <View className="w-[6px] h-[6px] bg-[#00C883] rounded-full absolute right-1 top-1 z-50"></View>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between gap-y-5">
          {CATALOG.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handlePress(item.id)}
              className="w-[48%] items-center justify-center gap-[10px]"
            >
              <View className="w-full items-center justify-center h-[200px]">
                <Image
                  source={item.imgUrl}
                  resizeMode="cover"
                  className="w-full h-full rounded-sm"
                />
              </View>

              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-base"
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CatalogScreen;
