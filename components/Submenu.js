import React from "react";
import { View, StyleSheet } from "react-native";
import LanguageSelector from "./LanguageSelector";
import SortingSelector from "./SortingSelector";
import DatesSelector from "./DatesSelector";

function Submenu({
  searchLanguage,
  setSearchLanguage,
  sortBy,
  setSortBy,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
}) {
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

      <DatesSelector
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
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
    justifyContent: "center",
    rowGap: 10,
  },
});

export default Submenu;
