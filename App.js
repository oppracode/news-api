import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [keywords, setKeywords] = useState("Apple");

  const getNewsApi = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?language=en&q=${keywords}&apiKey=85a3d13a6aaf4ed8b47dc805718c570c`
      );
      const json = await response.json();
      setSearchResult(json.articles);
      console.log(json.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsApi();
  }, []);

  return (
    <View data={searchResult} style={styles.container}>
      <SearchBar />
      {searchResult.map((article, index) => (
        <Card key={index + 1} {...article} />
      ))}
      <StatusBar style="auto" />
    </View>
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
