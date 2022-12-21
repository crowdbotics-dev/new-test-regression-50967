import { CheckBox } from "react-native-elements";
import { Switch } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled10 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.hPxNPlim}></TextInput><Switch style={styles.OaFOUvZH} value={false}></Switch><CheckBox style={styles.xSMqlOyn} title="Checkbox Title"></CheckBox></ScrollView>
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
  },
  hPxNPlim: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute"
  },
  OaFOUvZH: {
    width: 50,
    height: 25
  },
  xSMqlOyn: {
    width: 183,
    height: 69
  }
});
export default Untitled10;