import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LanguageSelector = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedLanguage === "en" && styles.radioButtonSelected,
        ]}
        onPress={() => setSelectedLanguage("en")}
      >
        <Text style={styles.radioButtonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedLanguage === "ru" && styles.radioButtonSelected,
        ]}
        onPress={() => setSelectedLanguage("ru")}
      >
        <Text style={styles.radioButtonText}>Russian</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.radioButton,
          selectedLanguage === "fr" && styles.radioButtonSelected,
        ]}
        onPress={() => setSelectedLanguage("fr")}
      >
        <Text style={styles.radioButtonText}>French</Text>
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
  radioButton: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    borderColor: "black",
    backgroundColor: "transparent",
  },
  radioButtonText: {
    fontSize: 16,
  },
  radioButtonSelected: {
    backgroundColor: "lightgreen",
  },
});

export default LanguageSelector;
