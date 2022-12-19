import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.bdWABOVE}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  bdWABOVE: {
    height: 147,
    width: 194,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flexWrap: "no-wrap",
    position: "absolute",
    left: 0,
    top: 192
  },
  niXQhIpO: {
    flex: 1
  },
  UhaBxtfx: {
    flex: 1
  }
});
export default Untitled1;