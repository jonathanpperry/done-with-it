import React from "react";
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{ backgroundColor: "dodgerblue", width: 150, height: 150 }}
      />
      <View style={{ backgroundColor: "gold", width: 150, height: 150 }} />
      <View style={{ backgroundColor: "tomato", width: 150, height: 150 }} />
      <View style={{ backgroundColor: "gray", width: 150, height: 150 }} />
      <View
        style={{ backgroundColor: "greenyellow", width: 150, height: 150 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
