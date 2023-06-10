import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Submenu from "../components/Submenu";

function SearchScreen() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("en");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  async function getNewsApi(query, language, sort, from, to) {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?language=${language}&q=${query}&sortBy=${sort}&from=${from}&to=${to}&apiKey=132955b7216b4177b36eecbbf664306c`
      );
      const json = await response.json();
      console.log(json);
      setSearchResult(json.articles);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!searchQuery) return;
    getNewsApi(searchQuery, searchLanguage, sortBy, fromDate, toDate);
  }, [searchQuery, searchLanguage, sortBy, fromDate, toDate]);

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
