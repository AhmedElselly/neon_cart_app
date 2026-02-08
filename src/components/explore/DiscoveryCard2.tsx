import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  image: any;
  title: string;
  tag?: string;
};

export function DiscoveryCard2({ image, title, tag }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      {tag && (
        <View style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    height: 420,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 12,
    width: 170,
  },
  image: {
    objectFit: "cover",
    width: "100%",
  },
  tag: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#1DA1FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
  },
  title: {
    position: "absolute",
    bottom: 14,
    left: 14,
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
});
