import { ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

const CATEGORIES = ["CYBERPUNK", "ECO-FRIENDLY", "OVERSIZED"];

export function CategoryChips() {
  const [active, setActive] = useState("CYBERPUNK");

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {CATEGORIES.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => setActive(item)}
          style={[styles.chip, active === item && styles.chipActive]}
        >
          <Text style={[styles.text, active === item && styles.textActive]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
    backgroundColor: "#162833",
    marginRight: 10,
  },
  chipActive: {
    backgroundColor: "#0E3A56",
    borderWidth: 1,
    borderColor: "#1DA1FF",
  },
  text: {
    color: "#9FB3C8",
    fontWeight: "600",
    fontSize: 13,
  },
  textActive: {
    color: "#1DA1FF",
  },
});
