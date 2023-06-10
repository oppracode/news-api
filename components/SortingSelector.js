import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import data from "../data/data.json";

function SortingSelector({ selectedSorting, setSelectedSorting }) {
  const sortingElements = data.sorting.map((item, id) => {
    return (
      <TouchableOpacity
        key={id}
        style={[
          styles.button,
          selectedSorting === item.code && styles.buttonSelected,
        ]}
        onPress={() => setSelectedSorting(item.code)}
      >
        <Text style={styles.buttonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  });

  return <View style={styles.container}>{sortingElements}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    flexWrap: "wrap",
    rowGap: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    borderColor: "black",
    backgroundColor: "transparent",
    width: "30%",
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
