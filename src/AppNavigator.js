import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./views/Home";
import Product from "./components/Product";
import DetailsScreen from "./views/Details";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home", headerStyle: { backgroundColor: "#3C344B" } }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ title: "Product" }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
