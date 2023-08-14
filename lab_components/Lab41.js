

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import GameOverScreen from "../lab_components/GameOverScreen";
import GameScreen from "../lab_components/GameScreen";
import StartGameScreen from "../lab_components/StartGameScreen";
import { Dimensions } from "react-native";

export default function App() {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setCorrectNumber(0);
  };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum)
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (correctNumber > 0 && guessRounds <= 0) {
    content = (
      <GameScreen answer={correctNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen selectedNum={correctNumber} rounds={guessRounds} onStartGame={configureNewGameHandler} />);
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});