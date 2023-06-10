import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function SortingSelector({ selectedSorting, setSelectedSorting }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedSorting === "popularity" && styles.buttonSelected,
        ]}
        onPress={() => setSelectedSorting("popularity")}
      >
        <Text style={styles.buttonText}>Popularity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedSorting === "relevancy" && styles.buttonSelected,
        ]}
        onPress={() => setSelectedSorting("relevancy")}
      >
        <Text style={styles.buttonText}>Relevancy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedSorting === "publishedAt" && styles.buttonSelected,
        ]}
        onPress={() => setSelectedSorting("publishedAt")}
      >
        <Text style={styles.buttonText}>Newest</Text>
      </TouchableOpacity>
    </View>
  );
}

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

export default SortingSelector;
