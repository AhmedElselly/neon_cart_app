import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  itemCount: number;
  onBack?: () => void;
};

export function CartHeader({ itemCount, onBack }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onBack}>
        <Ionicons name="arrow-back" size={22} color="#FFF" />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>My Cart</Text>
        <Text style={styles.count}>{itemCount} ITEMS</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <Ionicons name="ellipsis-horizontal" size={22} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  count: {
    color: "#9FB3C8",
    fontSize: 12,
    textAlign: "center",
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
