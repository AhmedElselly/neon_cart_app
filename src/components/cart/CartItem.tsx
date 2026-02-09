import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  image: any;
  title: string;
  subtitle?: string;
  price: number;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export function CartItem({
  image,
  title,
  subtitle,
  price,
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <Text style={styles.price}>${price}.00</Text>

        <View style={styles.stepper}>
          <TouchableOpacity onPress={onDecrease} style={styles.step}>
            <Ionicons name="remove" size={16} color="#FFF" />
          </TouchableOpacity>

          <Text style={styles.qty}>{quantity}</Text>

          <TouchableOpacity onPress={onIncrease} style={styles.step}>
            <Ionicons name="add" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <Ionicons name="heart-outline" size={20} color="#9FB3C8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#162833",
    padding: 14,
    borderRadius: 18,
    marginBottom: 14,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 16,
  },
  title: {
    color: "#FFF",
    fontWeight: "600",
  },
  subtitle: {
    color: "#9FB3C8",
    fontSize: 12,
    marginVertical: 2,
  },
  price: {
    color: "#1DA1FF",
    marginTop: 4,
    fontWeight: "600",
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 10,
  },
  step: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#0F1C24",
    alignItems: "center",
    justifyContent: "center",
  },
  qty: {
    color: "#FFF",
    fontWeight: "600",
  },
});
