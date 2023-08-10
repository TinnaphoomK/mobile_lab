import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput, Keyboard } from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("")
  const [selectedNumber, setSelectedNumber] = useState()
  const [confirmed, setConfirmed] = useState(false)
  const [rounds, setRounds] = useState(0)

  let confirmedOutput;

  useEffect(() => {
    if (selectedNumber === props.answer) {
      props.onGameOver(rounds);
    }
  }, [rounds, props.answer]);

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{selectedNumber}</Text>
        </View>
        <Text>The answer is {selectedNumber < props.answer ? "The answer is greater" : "The answer is lower"}, Rounds: {rounds}</Text>
      </View>
    );
  }

  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
  const resetInputHandler = () => {
    setEnteredValue("")
  };

  const confirmInputHandler = () => {
    const parsedNumber = parseInt(enteredValue);
    setSelectedNumber(parsedNumber);
    console.log(props);
    setConfirmed(true);
    setRounds(rounds + 1)
    setEnteredValue("")
    Keyboard.dismiss()
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    marginVertical: 20,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;