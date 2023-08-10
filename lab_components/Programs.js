import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

// Import images
const IT_Logo = require("../assets/IT_Logo.png");
const images = [
  { src: require("../assets/1.jpg"), name: "Information Technology" },
  { src: require("../assets/2.jpg"), name: "Software Development" },
  { src: require("../assets/3.jpg"), name: "Data Science" },
  { src: require("../assets/4.jpg"), name: "Web Development" },
];
const widthDimension = Dimensions.get('window').width;

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Image resizeMode="contain" style={styles.img} source={IT_Logo} />
        <Text style={{ fontSize: 40 }}>Programs</Text>
      </View>
      <View style={styles.container}>
        <ScrollView>

          {images.map((item, index) => (
            <TouchableOpacity>
              <View key={index}>
                <Image resizeMode="contain" source={item.src} style={{ width: 300, height: 200 }} />
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          ))}

        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "black",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "blue",
    height: 100,
    width: widthDimension,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 70,
    width: 70,
  },
});