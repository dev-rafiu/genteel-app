import { FontFamily } from "@/src/constants/Typography";
import { View, Text } from "react-native";
import ProductWithPrice from "@/src/components/ProductWithPrice";
import { PRODUCTS } from "@/src/data/products";

function NewInStock() {
  return (
    <View className="gap-4 px-5">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="uppercase text-xl"
      >
        new in stock
      </Text>

      <View className="flex-row gap-4">
        {PRODUCTS.inStock.map((item) => (
          <ProductWithPrice key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default NewInStock;
