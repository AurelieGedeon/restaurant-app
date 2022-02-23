import React, { useEffect, useState } from "react";
import { Text } from "react-native";

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState();
  useEffect(() => {
    fetch("https://bocacode-intranet-api.web.app/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch(alert);
  }, []);
  return <Text>Restuarants</Text>;
}
