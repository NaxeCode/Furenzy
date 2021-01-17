import React from "react";

import { Text, StyleSheet } from "react-native";

import { Card, Button } from "react-native-elements";

function Product({ navigation }) {
  return (
    <Card>
      <Card.Image
        style={styles.picSize}
        source={require("../../assets/img/sriracha-furry-23.png")}
      ></Card.Image>
      <Text style={{ marginBottom: 10, marginTop: 20 }} h2>
        Siracha Shirt
      </Text>
      <Text style={styles.price} h4>
        $ 450
      </Text>
      <Text h6 style={styles.description}>
        Added 1d ago
      </Text>
      <Button
        type="clear"
        title="Buy now"
        onPress={() => navigation.navigate("Details")}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#5a647d",
    fontWeight: "bold",
    fontSize: 30,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 10,
    color: "#c1c4cd",
  },
  picSize: {
    height: 400,
    width: 400,
  },
});

export default Product;
