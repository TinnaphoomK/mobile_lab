import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";

const StartGameScreen = (props) => {
  let correctNumber = Math.floor(Math.random() * 100)
  const [rounds, setRounds] = useState(0)

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Welcome to My Game</Text>
      <Button
        title="START GAME"
        onPress={() => {
          props.rounds = 0
          props.onStartGame(correctNumber, props.rounds)
          console.log(props);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;