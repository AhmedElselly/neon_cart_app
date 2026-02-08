import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { styles } from "./styles";

const TRENDING = [
  {
    id: "1",
    title: "Sonic Boom Mini",
    price: 89,
    category: "TECH",
    image: require("../../assets/speaker.png"),
  },
  {
    id: "2",
    title: "Zen Ceramic Vase",
    price: 45,
    category: "HOME",
    image: require("../../assets/vase.png"),
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning</Text>
      <Text style={styles.name}>Alex Rivera</Text>

      <Text style={styles.section}>Trending Now</Text>

      <FlatList
        data={TRENDING}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>${item.price}.00</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
