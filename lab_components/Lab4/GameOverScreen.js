import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  console.log(props);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is Over!</Text>
      <Text style={styles.title}>Number of rounds : {props.rounds}</Text>
      <Text style={styles.title}>The answer was {props.selectedNum}</Text>
      <Button
        title="New Game"
        onPress={() => {
          props.onStartGame()
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

export default GameOverScreen;