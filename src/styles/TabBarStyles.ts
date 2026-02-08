import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 60,
    height: 72,
    borderRadius: 24,
    borderTopWidth: 0,
    elevation: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "95%",
    marginHorizontal: "auto",
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    backgroundColor: "rgba(15,28,36,0.6)", // fallback
    overflow: "hidden",
  },

  itemTab: {
    marginTop: 15,
  },

  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#162833",
    alignItems: "center",
    justifyContent: "center",
  },

  iconActive: {
    backgroundColor: "#1DA1FF",
  },

  cartWrapper: {
    position: "absolute",
    top: -28,
    alignItems: "center",
    width: 80,
  },

  cartButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#1DA1FF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1DA1FF",
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
});
