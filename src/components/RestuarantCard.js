import React from "react";
import { View, Text, Image } from "react-native";

export default function RestaurantCard({ restaurant }) {
  return (
    <View>
      <Image />
      <Text>{restaurant.name}</Text>
    </View>
  );
}
