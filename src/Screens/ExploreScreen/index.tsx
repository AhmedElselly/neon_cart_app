import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { ExploreHeader } from "../../components/explore/ExploreHeader";
import { SearchBar } from "../../components/explore/SearchBar";
import { CategoryChips } from "../../components/explore/CategoryChips";
import { DiscoveryCard } from "../../components/explore/DiscoveryCard";
import { ProductCard } from "../../components/explore/ProductCard";
import { DiscoveryCard2 } from "../../components/explore/DiscoveryCard2";

export default function ExploreScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <ScrollView
      style={{ backgroundColor: "#0F1C24" }}
      contentContainerStyle={{
        padding: 16,
        paddingTop: 40,
        paddingBottom: tabBarHeight + 70,
      }}
      showsVerticalScrollIndicator={false}
    >
      <ExploreHeader />
      <SearchBar />
      <CategoryChips />

      {/* Discovery */}
      <View style={styles.sectionHeader}>
        <Text style={styles.section}>Discovery</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>

      <View style={styles.discoveryGrid}>
        <View>
          <DiscoveryCard2
            image={require("../../../assets/man_standing.jpg")}
            title="Urban Fit"
            tag="TRENDING"
            left={true}
          />
        </View>
        <View>
          <DiscoveryCard2
            image={require("../../../assets/home.jpg")}
            title="Minimalist Home"
            left={false}
          />
          <DiscoveryCard2
            image={require("../../../assets/hanging_shirts.jpg")}
            title="Summer Essentials"
            left={false}
          />
        </View>
      </View>

      {/* Suggested */}
      <View style={styles.sectionHeader}>
        <Text style={styles.section}>Suggested for You</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ProductCard
          image={require("../../../assets/shoes_white.jpg")}
          brand="Nike Sport"
          name="Air Max Crimson"
          price={129}
        />
        <ProductCard
          image={require("../../../assets/shoes_red.jpg")}
          brand="Bose Tech"
          name="QuietComfort Ultra"
          price={349}
        />
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  section: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
  viewAll: {
    color: "#1DA1FF",
    fontWeight: "600",
  },
  discoveryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-evenly",
  },
});
