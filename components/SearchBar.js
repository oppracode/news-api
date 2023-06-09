import React, { useState, useCallback } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function SearchBar({ onSubmit }) {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search keywords"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={() => onSubmit(searchText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 4,
  },
});

export default SearchBar;
