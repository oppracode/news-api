import React from "react";
import { View, StyleSheet } from "react-native";
import LanguageSelector from "./LanguageSelector";
import SortingSelector from "./SortingSelector";

function Submenu({ searchLanguage, setSearchLanguage, sortBy, setSortBy }) {
  return (
    <View style={styles.container}>
      <LanguageSelector
        selectedLanguage={searchLanguage}
        setSelectedLanguage={setSearchLanguage}
      />
      <SortingSelector
        selectedSorting={sortBy}
        setSelectedSorting={setSortBy}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    flex: 0,
    rowGap: 10,
  },
  rowGap: {
    height: 10,
  },
});

export default Submenu;
