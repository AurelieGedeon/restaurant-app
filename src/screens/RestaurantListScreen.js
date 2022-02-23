import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import RestaurantCard from "../components/RestuarantCard";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);

  const navigation = useNavigation();

  const goToNewRestaurant = () => {
    navigation.navigate("NewRestaurant");
  };
  return (
    <View>
      <Button
        title="Add New Restuarant"
        onPress={goToNewRestaurant}
        buttonStyle={{
          backgroundColor: "#8bc458",
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
