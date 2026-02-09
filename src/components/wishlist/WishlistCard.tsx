import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  image: any;
  category: string;
  title: string;
  price: number;
  onRemove: () => void;
  onAddToBag: () => void;
};

export function WishlistCard({
  image,
  category,
  title,
  price,
  onRemove,
  onAddToBag,
}: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <TouchableOpacity style={styles.remove} onPress={onRemove}>
        <Ionicons name="close" size={16} color="#FFF" />
      </TouchableOpacity>

      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}.00</Text>

      <TouchableOpacity style={styles.button} onPress={onAddToBag}>
        <Ionicons name="bag-add-outline" size={16} color="#FFF" />
        <Text style={styles.buttonText}>Add to Bag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#162833",
    borderRadius: 20,
    padding: 12,
    margin: 6,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 16,
    marginBottom: 10,
  },
  remove: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 14,
    padding: 6,
    zIndex: 10,
  },
  category: {
    color: "#9FB3C8",
    fontSize: 12,
  },
  title: {
    color: "#FFF",
    fontWeight: "600",
    marginTop: 2,
  },
  price: {
    color: "#1DA1FF",
    fontWeight: "700",
    marginVertical: 6,
  },
  button: {
    flexDirection: "row",
    gap: 6,
    backgroundColor: "#1DA1FF",
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
  },
});
