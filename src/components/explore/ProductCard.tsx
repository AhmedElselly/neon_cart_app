import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  image: any;
  brand: string;
  name: string;
  price: number;
};

export function ProductCard({ image, brand, name, price }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <TouchableOpacity style={styles.heart}>
        <Ionicons name="heart-outline" size={18} color="#FFF" />
      </TouchableOpacity>

      <Text style={styles.brand}>{brand}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}.00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    marginRight: 14,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 18,
  },
  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 14,
    padding: 6,
  },
  brand: {
    color: "#9FB3C8",
    fontSize: 12,
    marginTop: 8,
  },
  name: {
    color: "#FFF",
    fontWeight: "600",
  },
  price: {
    color: "#1DA1FF",
    marginTop: 4,
    fontWeight: "600",
  },
});
