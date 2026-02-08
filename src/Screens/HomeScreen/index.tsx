import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

const CATEGORIES = ["All", "Tech", "Fashion", "Home"];

const NEW_ARRIVALS = [
  {
    id: "1",
    title: "Studio Pro Pro",
    price: 349,
    image: require("../../../assets/shoes_white.jpg"),
  },
];

const TRENDING = [
  {
    id: "1",
    title: "Sonic Boom Mini",
    price: 89,
    category: "TECH",
    image: require("../../../assets/shoes_red.jpg"),
  },
  {
    id: "2",
    title: "Zen Ceramic Vase",
    price: 45,
    category: "HOME",
    image: require("../../../assets/sunglasses.jpg"),
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 200,
      }}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View>
            <Text style={styles.greeting}>Good Morning</Text>
            <Text style={styles.name}>Ahmed Elselly</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.bell}>
          <Ionicons name="notifications-outline" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <View style={styles.search}>
          <Ionicons name="search" size={18} color="#9FB3C8" />
          <TextInput
            placeholder="Search trendy products"
            placeholderTextColor="#9FB3C8"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.filter}>
          <Ionicons name="options-outline" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <FlatList
        data={CATEGORIES}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, marginTop: 16 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[styles.category, index === 0 && styles.categoryActive]}
          >
            <Text
              style={{
                color: index === 0 ? "#000" : "#9FB3C8",
                fontWeight: "600",
              }}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* New Arrivals */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>New Arrivals</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>

      <FlatList
        data={NEW_ARRIVALS}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.newCard}>
            <Image source={item.image} style={styles.newImage} />
            <Text style={styles.newTitle}>{item.title}</Text>
            <Text style={styles.newPrice}>${item.price}.00</Text>
          </View>
        )}
      />

      {/* Trending */}
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <View style={styles.trendingContainer}>
        {TRENDING?.map((item) => {
          return (
            <View key={item.id} style={styles.trendingCard}>
              <Image source={item.image} style={styles.trendingImage} />
              <Text style={styles.tag}>{item.category}</Text>
              <Text style={styles.trendingTitle}>{item.title}</Text>
              <Text style={styles.trendingPrice}>${item.price}.00</Text>
            </View>
          );
        })}
      </View>

      {/* <FlatList
        data={TRENDING}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12, marginTop: 12, marginBottom: 50 }}
        renderItem={({ item }) => (
          <View style={styles.trendingCard}>
            <Image source={item.image} style={styles.trendingImage} />
            <Text style={styles.tag}>{item.category}</Text>
            <Text style={styles.trendingTitle}>{item.title}</Text>
            <Text style={styles.trendingPrice}>${item.price}.00</Text>
          </View>
        )}
      /> */}
    </ScrollView>
  );
}
