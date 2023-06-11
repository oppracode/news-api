import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

function SearchBar({ onSubmit }) {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search keywords"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={() => onSubmit(searchText)}
      />
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => onSubmit(searchText)}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
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
    height: 45,
  },
  searchButton: {
    backgroundColor: "#34B27E",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SearchBar;
