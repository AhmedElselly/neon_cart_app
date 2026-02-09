import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  itemCount: number;
};

export function WishlistHeader({ itemCount }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Wishlist</Text>
        <Text style={styles.subtitle}>{itemCount} Items Saved</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <Ionicons name="options-outline" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    color: "#1DA1FF",
    fontSize: 13,
    marginTop: 4,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#162833",
    alignItems: "center",
    justifyContent: "center",
  },
});
