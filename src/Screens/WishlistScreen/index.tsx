import { FlatList, StyleSheet, View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useState } from "react";

import { WishlistHeader } from "../../components/wishlist/WishlistHeader";
import { WishlistCard } from "../../components/wishlist/WishlistCard";
import { WishlistEmptyState } from "../../components/wishlist/WishlistEmptyState";

const MOCK_WISHLIST = [
  {
    id: "1",
    title: "Minimalist Sneakers",
    category: "Footwear",
    price: 129,
    image: require("../../../assets/shoes_red.jpg"),
  },
  {
    id: "2",
    title: "Leather Backpack",
    category: "Accessories",
    price: 245,
    image: require("../../../assets/bag.jpg"),
  },
  {
    id: "3",
    title: "Modern Chrono",
    category: "Luxury",
    price: 180,
    image: require("../../../assets/watch.jpg"),
  },
  {
    id: "4",
    title: "Studio ANC Headset",
    category: "Audio",
    price: 320,
    image: require("../../../assets/headphones.jpg"),
  },
];

export default function WishlistScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [items, setItems] = useState(MOCK_WISHLIST);

  return (
    <View style={styles.container}>
      <WishlistHeader itemCount={items.length} />

      {items.length === 0 ? (
        <WishlistEmptyState onStartShopping={() => {}} />
      ) : (
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: tabBarHeight + 60,
          }}
          renderItem={({ item }) => (
            <WishlistCard
              {...item}
              onRemove={() =>
                setItems((prev) => prev.filter((p) => p.id !== item.id))
              }
              onAddToBag={() => {}}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1C24",
    padding: 16,
    paddingTop: 40,
  },
});
