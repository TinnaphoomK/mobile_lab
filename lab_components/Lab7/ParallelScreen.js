import { useRef } from "react";
import { Animated, Button, Easing, View } from "react-native";

export default ParallelScreen = () => {
  const header = useRef(new Animated.Value(0.3)).current;
  const description = useRef(new Animated.Value(0)).current;

  const translateX = description.interpolate({
    inputRange: [0, 0.25, 0.75, 1],
    outputRange: [0, -50, 50, 0],
  });

  const animate = () => {
    Animated.parallel([
      Animated.spring(header, {
        toValue: 0.8,
        friction: 1,
        useNativeDriver: true,
      }),
      Animated.timing(description, {
        toValue: 1,
        duration: 3500,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start(() => {
      header.setValue(0.3);
      description.setValue(0);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Image
          style={{ width: 240, height: 200, transform: [{ scale: header }] }}
          source={require("../../assets/IT_Logo.png")}
        />
        <Animated.Text
          style={{
            color: 'orange',
            fontSize: 24,
            fontWeight: 'bold',
            transform: [{ translateX }],
          }}
        >
          Welcome to Faculty of IT!
        </Animated.Text>
      </View>
      <Button title="Parallel" onPress={animate} />
    </View>
  );
}