import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function LogoutButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
      <Text style={styles.text}>Log Out</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 10,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#3A1E24",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "#FF6B6B",
    fontWeight: "600",
    fontSize: 16,
  },
});
