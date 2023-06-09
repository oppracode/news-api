import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedLanguage === "en" && styles.buttonSelected,
        ]}
        onPress={() => setSelectedLanguage("en")}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedLanguage === "ru" && styles.buttonSelected,
        ]}
        onPress={() => setSelectedLanguage("ru")}
      >
        <Text style={styles.buttonText}>Russian</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedLanguage === "fr" && styles.buttonSelected,
        ]}
        onPress={() => setSelectedLanguage("fr")}
      >
        <Text style={styles.buttonText}>French</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    borderColor: "black",
    backgroundColor: "transparent",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#333333",
  },
  buttonSelected: {
    backgroundColor: "#34B27E",
  },
});

export default LanguageSelector;
