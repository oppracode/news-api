//import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import LanguageSelector from "../components/LanguageSelector";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import SortingSelector from "../components/SortingSelector";
import Submenu from "../components/Submenu";

export default function SearchScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("en");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  const getNewsApi = async (query, language, sort) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?language=${language}&q=${query}&sortBy=${sort}&apiKey=132955b7216b4177b36eecbbf664306c`
      );
      const json = await response.json();
      console.log(json);
      setSearchResult(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;
    getNewsApi(searchQuery, searchLanguage, sortBy);
    console.log(searchQuery);
    console.log(searchLanguage);
    console.log(sortBy);
  }, [searchQuery, searchLanguage, sortBy]);

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
          <Text>Show Element</Text>
        </TouchableOpacity>
        {showSubmenu && (
          <Submenu
            searchLanguage={searchLanguage}
            setSearchLanguage={setSearchLanguage}
            sortBy={sortBy}
            setSortBy={setSortBy}
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
