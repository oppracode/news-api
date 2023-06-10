import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Submenu from "../components/Submenu";
import getNewsAPI from "../utils/getNewsAPI";

function SearchScreen() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("en");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;
    fetchData();
  }, [searchQuery, searchLanguage, sortBy, fromDate, toDate]);

  async function fetchData() {
    try {
      const result = await getNewsAPI({
        query: searchQuery,
        language: searchLanguage,
        sort: sortBy,
        from: fromDate,
        to: toDate,
      });
      setSearchResult(result);
    } catch (error) {
      console.log(error);
    }
  }

  function renderItem({ item }) {
    return <Card {...item} />;
  }

  function toggleSubmenu() {
    showSubmenu ? setShowSubmenu(false) : setShowSubmenu(true);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchBar onSubmit={setSearchQuery} />
        <TouchableOpacity onPress={() => toggleSubmenu()}>
          <Text>Search Parameters</Text>
        </TouchableOpacity>
        {showSubmenu && (
          <Submenu
            searchLanguage={searchLanguage}
            setSearchLanguage={setSearchLanguage}
            sortBy={sortBy}
            setSortBy={setSortBy}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
          />
        )}
        <FlatList
          data={searchResult}
          renderItem={renderItem}
          keyExtractor={(_, index) => index}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default SearchScreen;
