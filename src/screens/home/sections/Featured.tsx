import { FontFamily } from "@/src/constants/Typography";
import { View, Text } from "react-native";
import ProductWithPrice from "@/src/components/ProductWithPrice";
import { PRODUCTS } from "@/src/data/products";

function Featured() {
  return (
    <View className="gap-4 px-5">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="uppercase text-xl"
      >
        featured
      </Text>

      <View className="flex-row gap-4">
        {PRODUCTS.featured.map((item) => (
          <ProductWithPrice key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default Featured;
