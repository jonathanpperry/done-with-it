import React from "react";
import {
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Image tapped!")}>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
