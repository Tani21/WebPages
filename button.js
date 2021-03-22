
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar } from 'react-native';

export default function App() {
	console.log("App executed");
	
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me"/>
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
