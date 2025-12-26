import { View } from "react-native";
import StylePreference from "./StylePreference";
import SavedItems from "./SavedItems";

function Overview() {
  return (
    <View className="gap-10">
      <StylePreference />
      <SavedItems />
    </View>
  );
}

export default Overview;
