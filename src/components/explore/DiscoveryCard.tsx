import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  image: any;
  title: string;
  tag?: string;
};

export function DiscoveryCard({ image, title, tag }: Props) {
  return (
    <View style={styles.card}>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
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
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 12,
    width: 150,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
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
