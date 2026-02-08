import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  active?: boolean;
};

export function AchievementChip({ icon, label, active }: Props) {
  return (
    <View style={[styles.chip, active && styles.active]}>
      <Ionicons name={icon} size={16} color={active ? "#FFF" : "#9FB3C8"} />
      <Text style={[styles.text, active && styles.textActive]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#162833",
    marginRight: 10,
  },
  active: {
    backgroundColor: "#1DA1FF",
  },
  text: {
    color: "#9FB3C8",
    fontSize: 13,
    fontWeight: "600",
  },
  textActive: {
    color: "#FFF",
  },
});
