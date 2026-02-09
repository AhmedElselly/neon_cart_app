import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import Home from "../screens/Home";
// import Explore from "../screens/Explore";
// import Wishlist from "../screens/Wishlist";
// import Profile from "../screens/Profile";
// import Cart from "../screens/Cart";
import { styles } from "../styles/TabBarStyles";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { BlurView } from "expo-blur";
import ExploreScreen from "../Screens/ExploreScreen";
import CartScreen from "../Screens/CartScreen";
import WishlistScreen from "../Screens/WishlistScreen";

const Tab = createBottomTabNavigator();

function TabIcon({
  icon,
  focused,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  focused: boolean;
}) {
  return (
    <View style={[styles.iconWrap, focused && styles.iconActive]}>
      <Ionicons name={icon} size={20} color={focused ? "#000" : "#9FB3C8"} />
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarBackground: () => (
          <BlurView
            intensity={25}
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarItemStyle: styles.itemTab,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="home" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="compass" focused={focused} />
          ),
        }}
      />

      {/* Floating Cart */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: ({ onPress, accessibilityState }) => (
            <TouchableOpacity
              onPress={onPress}
              accessibilityState={accessibilityState}
              style={styles.cartWrapper}
            >
              <View style={styles.cartButton}>
                <Ionicons name="cart" size={24} color="#FFF" />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="heart" focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon icon="person" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
