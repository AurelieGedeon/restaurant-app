import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AddNewRestaurant() {
  const [restaurantName, setRestaurantName] = useState();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [newRestaurant, setNewRestaurant] = useState();

  const navigation = useNavigation();

  //   const newRestaurant = {
  //     address: address,
  //     name: restaurantName,
  //     numRatings: rating,
  //     photoUrl: photo,
  //     rating: rating,
  //   };
  useEffect(() => {
    if (newRestaurant.address && newRestaurant.name) {
      setBtnDisabled(false);
    }
  });
  const sendNewRestaurantInfo = () => {
    fetch("https://bocacode-intranet-api.web.app/restaurants", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then(() => alert("New restaurant added"))
      .then(() => navigation.navigate("Home"))
      .catch((err) => console.error(err));
  };

  console.log(newRestaurant);

  return (
    <>
      <View>
        <Text>This is my "add new restaurant" screen</Text>
        <Input
          placeholder="Restaurant Name"
          spellCheck
          onChangeText={(userText) =>
            setNewRestaurant({ ...newRestaurant, name: userText })
          }
        />
        <Input
          placeholder="Photo"
          keyboardType="url"
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, photo: text })
          }
        />
        <Input
          placeholder="Address"
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, adress: text })
          }
        />
        <Input
          placeholder="Rating"
          keyboardType="numeric"
          maxLength="1"
          onChangeText={(text) =>
            setNewRestaurant({ ...newRestaurant, rating: text })
          }
        />
        <Button
          onPress={sendNewRestaurantInfo}
          title="Create new Restaurant"
          disabled={btnDisabled}
          buttonStyle={{
            backgroundColor: "#8bc458",
            borderRadius: 5,
          }}
        />
      </View>
    </>
  );
}
