import { Switch } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const user = useSelector(state => state.user);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative"
    }}><Text style={styles.rVuCsogm}>{user.email}</Text><Switch style={styles.pIKxYgRm}></Switch></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  tvWvkOhx: {
    width: 120,
    height: 70
  },
  iDSbdvtd: {
    width: 120,
    height: 80
  },
  rVuCsogm: {
    width: 212,
    height: 123,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    left: 10,
    top: 10
  },
  pIKxYgRm: {
    width: 50,
    height: 25
  }
});
export default Untitled2;