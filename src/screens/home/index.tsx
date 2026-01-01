import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Trending from "./sections/Trending";
import Recommended from "./sections/Recommended";
import Featured from "./sections/Featured";
import Brands from "./sections/Brands";
import Collections from "./sections/Collections";
import SearchBar from "./components/SearchBar";
import NewInStock from "./sections/NewInStock";
import { FontFamily } from "@/src/constants/Typography";

function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Kids", value: "Kids" },
  ]);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="gap-10 mt-10">
        <View className="gap-[23px] px-5">
          <View className="flex-row items-center justify-between">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Category"
              listMode="SCROLLVIEW"
              style={{ borderWidth: 0 }}
              containerStyle={{ width: 155 }}
              dropDownContainerStyle={{
                width: 200,
                borderColor: "#F7F7F7",
                borderRadius: "200px",
              }}
              textStyle={{
                fontSize: 24,
                fontFamily: FontFamily.loraMedium,
              }}
            />

            <View className="flex-row gap-5">
              <Feather name="heart" size={24} color="black" />
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
          </View>

          <SearchBar />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View className="gap-5 mb-20">
            <Trending />
            <Recommended />
            <NewInStock />
            <Brands />
            <Collections />
            <Featured />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
