import "react-native-gesture-handler";

import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="Open HOME page"
      />
    </View>
  );
}

export default DetailsScreen;
