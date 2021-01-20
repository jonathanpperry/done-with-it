import React from "react";
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text>Hello React!</Text>
      <Button
        color="blue"
        title="Click Me!"
        onPress={() => console.log("Button pressed")}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
