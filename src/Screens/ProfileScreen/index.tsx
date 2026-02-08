import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ProfileHeader } from "../../components/profile/ProfileHeader";
import { ProfileAvatar } from "../../components/profile/ProfileAvatar";
import { AchievementChip } from "../../components/profile/AchievementChip";
import { ProfileMenuItem } from "../../components/profile/ProfileMenuItem";
import { LogoutButton } from "../../components/profile/LogoutButton";

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 200,
      }}
    >
      <ProfileHeader />
      <ProfileAvatar />

      <Text style={styles.section}>ACHIEVEMENTS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AchievementChip icon="trophy" label="Top Buyer" active />
        <AchievementChip icon="leaf" label="Eco-Friendly" />
        <AchievementChip icon="flash" label="Early Adopter" />
      </ScrollView>

      <View style={{ marginTop: 24 }}>
        <ProfileMenuItem
          icon="cube"
          color="#4DA8FF"
          title="My Orders"
          subtitle="Track your active shipments"
        />
        <ProfileMenuItem
          icon="card"
          color="#9B6CFF"
          title="Payment Methods"
          subtitle="Manage cards and wallets"
        />
        <ProfileMenuItem
          icon="location"
          color="#FF8C42"
          title="Shipping Addresses"
          subtitle="2 saved locations"
        />
        <ProfileMenuItem
          icon="gift"
          color="#FF5FA2"
          title="Rewards & Coupons"
          subtitle="5 active discounts available"
        />
        <ProfileMenuItem
          icon="notifications"
          color="#2ED6A3"
          title="Notifications"
          subtitle="Mute, sound, and alert types"
        />
      </View>

      <LogoutButton />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1C24",
    paddingTop: 40,
  },
  section: {
    color: "#9FB3C8",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 12,
  },
});
