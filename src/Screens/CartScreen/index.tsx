import { ScrollView, StyleSheet } from "react-native";
import { useState } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { CartHeader } from "../../components/cart/CartHeader";
import { CartItem } from "../../components/cart/CartItem";
import { CartSummary } from "../../components/cart/CartSummary";
import { CheckoutButton } from "../../components/cart/CheckoutButton";

const MOCK_CART = [
  {
    id: "1",
    title: "Studio Pro Wireless",
    subtitle: "Black • Headphones",
    price: 199,
    image: require("../../../assets/headphones.jpg"),
  },
  {
    id: "2",
    title: "Horizon Watch V2",
    subtitle: "Silver • Smartwatch",
    price: 145,
    image: require("../../../assets/shoes_white.jpg"),
  },
];

export default function CartScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [items, setItems] = useState(
    MOCK_CART.map((i) => ({ ...i, quantity: 1 })),
  );

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <ScrollView
      style={{ backgroundColor: "#0F1C24" }}
      contentContainerStyle={{
        padding: 16,
        paddingTop: 40,
        paddingBottom: tabBarHeight + 80,
      }}
      showsVerticalScrollIndicator={false}
    >
      <CartHeader itemCount={items.length} />

      {items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onIncrease={() =>
            setItems((prev) =>
              prev.map((p) =>
                p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p,
              ),
            )
          }
          onDecrease={() =>
            setItems((prev) =>
              prev.map((p) =>
                p.id === item.id && p.quantity > 1
                  ? { ...p, quantity: p.quantity - 1 }
                  : p,
              ),
            )
          }
        />
      ))}

      <CartSummary subtotal={subtotal} shipping="FREE" total={subtotal} />

      <CheckoutButton onPress={() => {}} />
    </ScrollView>
  );
}
