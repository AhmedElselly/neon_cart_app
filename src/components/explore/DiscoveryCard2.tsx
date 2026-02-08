import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  image: any;
  title: string;
  tag?: string;
  left?: boolean;
};
export function DiscoveryCard2({ image, title, tag, left }: Props) {
  return (
    <View style={styles(left).card}>
      {/* Image */}
      <Image source={image} style={styles(left).image} />

      {/* Gradient overlay */}
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Tag */}
      {tag && (
        <View style={styles(left).tag}>
          <Text style={styles(left).tagText}>{tag}</Text>
        </View>
      )}

      {/* Title */}
      <Text style={styles(left).title}>{title}</Text>
    </View>
  );
}

const styles = (left: any) => {
  return StyleSheet.create({
    card: {
      height: left ? 412 : 200,
      width: left ? 170 : 150,
      borderRadius: 20,
      overflow: "hidden",
      marginBottom: 12,
      position: "relative", // 👈 REQUIRED
    },

    image: {
      width: "100%",
      height: "100%", // 👈 REQUIRED
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
};
