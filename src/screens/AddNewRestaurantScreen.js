import React, { useState } from "react";
import { Text, View } from "react-native";
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
  https://assets3.thrillist.com/v1/image/3030083/1200x630
  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
  };

  console.log(newRestaurant);

  return (
    <>
      <View>
        <Text>This is my "add new restaurant" screen</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(userText) => setRestaurantName(userText)}
        />
        <Input
          placeholder="Photo"
          keyboardType="url"
          onChangeText={(text) => setPhoto(text)}
        />
        <Input
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder="Rating"
          keyboardType="numeric"
          maxLength="1"
          onChangeText={(text) => setRating(text)}
        />
        <Button
          onPress={sendNewRestaurantInfo}
          title="Create new Restaurant"
          buttonStyle={{
            backgroundColor: "#8bc458",
            borderRadius: 5,
          }}
        />
      </View>
    </>
  );
}
