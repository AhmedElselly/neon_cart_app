import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onStartShopping: () => void;
};

export function WishlistEmptyState({ onStartShopping }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="heart-outline" size={48} color="#9FB3C8" />
      <Text style={styles.title}>Looking for more?</Text>
      <Text style={styles.subtitle}>
        Discover the latest trends in our new collection.
      </Text>

      <TouchableOpacity style={styles.button} onPress={onStartShopping}>
        <Text style={styles.buttonText}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 16,
  },
  subtitle: {
    color: "#9FB3C8",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#162833",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
