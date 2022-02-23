import React, { useState } from "react";
import { Text, View } from "react-native";
import { RestaurantContext } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { Input, Button } from "react-native-elements";

export default function AddNewRestaurant() {
  const [restaurantName, setRestaurantName] = useState();
  const [address, setAddress] = useState();
  const [rating, setRating] = useState();
  const [photo, setPhoto] = useState();

  const newRestaurant = {
    address: address,
    name: restaurantName,
    numRatings: rating,
    photoUrl: photo,
    rating: rating,
  };

  const sendNewRestaurantInfo = () => {
    fetch("path", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
  };

  return (
    <>
      <View>
        <Text>This is my "add new restaurant" screen</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(userText) => setRestaurantName(userText)}
        />
        <Input placeholder="Photo" keyboardType="url" />
        <Input placeholder="Address" keyboardType="" />
        <Input placeholder="Rating" keyboardType="numeric" maxLength="1" />
        <Button
          onPress={sendNewRestaurantInfo}
          title="Create new Restaurant"
          buttonStyle={{
            backgroundColor: "#8bc458",
            borderRadius: 30,
          }}
        />
      </View>
    </>
  );
}
