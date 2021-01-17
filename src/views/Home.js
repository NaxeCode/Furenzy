import "react-native-gesture-handler";

import React from "react";

import Product from "../components/Product";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Product />
      <Button
        color="#E81594"
        onPress={() => navigation.navigate("Details")}
        title="Open details page"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D2838",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  col: {
    flex: 1,
  },
});

export default HomeScreen;
