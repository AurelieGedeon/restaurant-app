import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "../components/RestuarantCard";
import { Button } from "react-native-elements";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);
  return (
    <View>
      <Button
        title="Add New Restuarant"
        onPress={() => alert("button pressed")}
        buttonStyle={{
          backgroundColor: "#75db5e",
          borderRadius: 30,
        }}
        containerStyle={{
          alignSelf: "center",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      {!restaurants ? (
        <Text>Loading</Text>
      ) : (
        <ScrollView>
          {restaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}
