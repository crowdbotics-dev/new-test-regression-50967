import { Switch } from "react-native";
import { ActivityIndicator } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ActivityIndicator style={styles.KTQXAUnp}></ActivityIndicator><ActivityIndicator style={styles.tlcWhHFZ}></ActivityIndicator><Switch style={styles.fZnIRdiV} value="test"></Switch></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  VjGqrocm: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute"
  },
  VuLiIIVA: {
    width: 50,
    height: 50
  },
  KTQXAUnp: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 40,
    top: 78,
    transform: "rotate(4deg)",
    color: "#d04646",
    backgroundColor: "#da3e3e"
  },
  tlcWhHFZ: {
    width: 50,
    height: 50
  },
  fZnIRdiV: {
    width: 91,
    height: 44,
    position: "absolute",
    left: 78,
    top: 90,
    transform: "rotate(10deg)"
  }
});
export default Untitled3;