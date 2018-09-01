import React from "react";
import { StyleSheet, Text, View } from "react-native";

const quotes = [
  {
    message:
      "Stop focusing on dumb shit. Don’t be afraid to break things. Don’t be romantic. Don’t take the time to breathe. Don’t aim for perfect. And whatever you do, keep moving.",
    author: "Gary Vaynerchuk"
  },
  {
    message:
      "Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.",
    author: "Gary Vaynerchuck"
  },
  {
    message: `Don't quit. Never give up trying to build the world you can see, even if others can't see it. Listen to your drum and your drum only. It's the one that makes the sweetest sound.`,
    author: "Simon Sinek"
  },
  {
    message:
      "If you have the opportunity to do amazing things in your life, I strongly encourage you to invite someone to join you.",
    author: "Simon Sinek"
  },
  {
    message: `I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'`,
    author: "Muhammad Ali"
  }
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Misa App.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Tien app 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
