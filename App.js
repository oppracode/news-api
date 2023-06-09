import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import LanguageSelector from "./components/LanguageSelector";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLanguage, setSearchLanguage] = useState("en");

  const getNewsApi = async (query, language) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?language=${language}&q=${query}&apiKey=132955b7216b4177b36eecbbf664306c`
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
    getNewsApi(searchQuery, searchLanguage);
    console.log(searchQuery);
    console.log(searchLanguage);
  }, [searchQuery]);

  function renderItem({ item }) {
    return <Card {...item} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LanguageSelector
        selectedLanguage={searchLanguage}
        setSelectedLanguage={setSearchLanguage}
      />
      <SearchBar onSubmit={setSearchQuery} />
      <FlatList
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={(_, index) => index}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    rowGap: 5,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
