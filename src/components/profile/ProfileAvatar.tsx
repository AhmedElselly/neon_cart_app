import { View, Text, StyleSheet, Image } from "react-native";

export function ProfileAvatar() {
  return (
    <View style={styles.container}>
      <View style={styles.ring}>
        <Image
          source={require("../../../assets/profile.jpg")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>Alex Thompson</Text>

      <View style={styles.row}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Gold Member</Text>
        </View>
        <Text style={styles.joined}>Joined Oct 2022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  ring: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#6C7CFF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  name: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 6,
  },
  badge: {
    backgroundColor: "#1DA1FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 12,
  },
  joined: {
    color: "#9FB3C8",
    fontSize: 12,
  },
});
