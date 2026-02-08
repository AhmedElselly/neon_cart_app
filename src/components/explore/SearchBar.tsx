import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={18} color="#9FB3C8" />

      <TextInput
        placeholder="Search products, brands..."
        placeholderTextColor="#9FB3C8"
        style={styles.input}
      />

      <TouchableOpacity>
        <Ionicons name="mic" size={18} color="#9FB3C8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#162833",
    paddingHorizontal: 14,
    height: 52,
    borderRadius: 26,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    color: "#FFF",
  },
});
