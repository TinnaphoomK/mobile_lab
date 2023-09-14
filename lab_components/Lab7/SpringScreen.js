import { useRef } from "react";
import { Animated, Button, View } from "react-native";

export default SpringScreen = () => {
  const springVal = useRef(new Animated.Value(0.3)).current;

  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start(() => {
      springVal.setValue(0.3);
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.Image
          style={{ width: 240, height: 200, transform: [{ scale: springVal }] }}
          source={require("../../assets/IT_Logo.png")}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button style={{}} title="Spring" onPress={spring} />
      </View>
    </View>
  );
};
