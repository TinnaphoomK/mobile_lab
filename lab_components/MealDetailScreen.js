import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({navigation, route}) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Text>Dish : {route.params.dish}</Text>
      <Text>Step : {route.params.step}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;