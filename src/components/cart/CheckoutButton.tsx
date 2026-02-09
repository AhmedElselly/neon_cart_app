import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

export function CheckoutButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Proceed to Checkout</Text>
      <Ionicons name="arrow-forward" size={18} color="#FFF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1DA1FF",
    padding: 18,
    borderRadius: 20,
    marginTop: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
