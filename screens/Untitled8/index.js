import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled8 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.JoTEUKZw} placeholder="Testing Wor" placeholderTextColor="#3511e6"></TextInput><FlatList style={styles.keeKZzZU} renderItem={() => <View style={styles.YXVswXYa}></View>} data={[1, 2, 3, 4]} keyExtractor={item => item.toString()} horizontal={false} ItemSeparatorComponent={() => <View style={styles.gaSpLKFw} />}></FlatList><FlatList style={styles.JymmsTZq} renderItem={() => <View style={styles.jBEmuFQM}></View>} ItemSeparatorComponent={() => <View style={styles.yANKTpKU} />} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  JoTEUKZw: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "fixed"
  },
  keeKZzZU: {
    position: "absolute",
    width: 100,
    height: 150
  },
  YXVswXYa: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  ASlbUixL: {
    backgroundColor: "#000000",
    height: 1
  },
  gaSpLKFw: {
    backgroundColor: "#000000",
    height: 1
  },
  JymmsTZq: {
    position: "absolute",
    width: 100,
    height: 150,
    left: 112,
    top: 218
  },
  jBEmuFQM: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  yANKTpKU: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled8;