import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function ExploreHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore</Text>

      <TouchableOpacity style={styles.icon}>
        <Ionicons name="bag-outline" size={22} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 26,
    fontWeight: "700",
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
