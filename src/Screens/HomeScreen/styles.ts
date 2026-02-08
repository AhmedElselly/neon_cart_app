import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F1C24",
    padding: 16,
    paddingTop: 40,
    paddingBottom: 140,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profile: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1DA1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  greeting: {
    color: "#9FB3C8",
    fontSize: 12,
  },

  name: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },

  bell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#162833",
    alignItems: "center",
    justifyContent: "center",
  },

  searchRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 20,
  },

  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#162833",
    paddingHorizontal: 12,
    borderRadius: 14,
    gap: 8,
  },

  searchInput: {
    color: "#FFF",
    flex: 1,
  },

  filter: {
    width: 48,
    height: 48,
    backgroundColor: "#1DA1FF",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  category: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: 40,
    backgroundColor: "#162833",
    borderRadius: 20,
  },

  categoryActive: {
    backgroundColor: "#1DA1FF",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20,
  },

  seeAll: {
    color: "#1DA1FF",
  },

  newCard: {
    width: 180,
    backgroundColor: "#162833",
    borderRadius: 16,
    padding: 12,
    marginRight: 12,
  },

  newImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  newTitle: {
    color: "#FFF",
    marginTop: 8,
  },

  newPrice: {
    color: "#1DA1FF",
    marginTop: 4,
  },

  trendingContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 12,
  },

  trendingCard: {
    backgroundColor: "#162833",
    borderRadius: 16,
    padding: 12,
    // flexBasis: "40%",
    width: 150,
  },

  trendingImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  tag: {
    color: "#1DA1FF",
    fontSize: 12,
    marginTop: 8,
  },

  trendingTitle: {
    color: "#FFF",
    fontWeight: "600",
  },

  trendingPrice: {
    color: "#1DA1FF",
    marginTop: 4,
  },
});
