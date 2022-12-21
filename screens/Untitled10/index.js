import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  zydiDmAS: {
    width: 142,
    height: 89,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    fontWeight: "700",
    position: "absolute",
    left: 56,
    top: 121
  }
});
export default Untitled10;