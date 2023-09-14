import { useRef } from "react";
import { Animated, Button, View } from "react-native";

export default SequenceScreen = () => {
  const fadeInVal = useRef(new Animated.Value(0)).current;
  const rotateVal = useRef(new Animated.Value(0)).current;

  const fade = fadeInVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });

  const spin = rotateVal.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const sequence = () => {
    Animated.sequence([
      Animated.timing(fadeInVal, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
      Animated.timing(rotateVal, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      fadeInVal.setValue(0);
      rotateVal.setValue(0);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.Image
          style={{
            width: 240,
            height: 200,
            opacity: fade,
            transform: [{ rotate: spin }],
          }}
          source={require("../../assets/IT_Logo.png")}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button title="Sequence" onPress={sequence} />
      </View>
    </View>
  );
};
