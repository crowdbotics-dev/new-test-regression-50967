import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.CuftisOi} value="" placeholder=""></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  CuftisOi: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 227,
    height: 69,
    position: "absolute",
    left: 32,
    top: 60
  }
});
export default Untitled6;