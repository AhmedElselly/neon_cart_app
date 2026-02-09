import { View, Text, StyleSheet } from "react-native";

type Props = {
  subtotal: number;
  shipping: string;
  total: number;
};

export function CartSummary({ subtotal, shipping, total }: Props) {
  return (
    <View style={styles.container}>
      <Row label="Subtotal" value={`$${subtotal}.00`} />
      <Row label="Shipping" value={shipping} />

      <View style={styles.divider} />

      <Row label="Total" value={`$${total}.00`} strong />
    </View>
  );
}

function Row({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <View style={styles.row}>
      <Text style={[styles.label, strong && styles.strong]}>{label}</Text>
      <Text style={[styles.value, strong && styles.strong]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#162833",
    borderRadius: 18,
    padding: 16,
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    color: "#9FB3C8",
  },
  value: {
    color: "#FFF",
  },
  strong: {
    fontWeight: "700",
    fontSize: 16,
    color: "#1DA1FF",
  },
  divider: {
    height: 1,
    backgroundColor: "#0F1C24",
    marginVertical: 12,
  },
});
