import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  subtitle: string;
};

export function ProfileMenuItem({ icon, color, title, subtitle }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <Ionicons name={icon} size={22} color="#FFF" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#9FB3C8" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#162833",
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
  subtitle: {
    color: "#9FB3C8",
    fontSize: 12,
    marginTop: 2,
  },
});
