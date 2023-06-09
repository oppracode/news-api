import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";

const DetailsScreen = ({ route }) => {
  const { article } = route.params;
  console.log(article);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.author}>By {article.author}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.content}>{article.content}</Text>
        <Text style={styles.date}>Published at: {article.publishedAt}</Text>
        <Text style={styles.source}>Source: {article.source.name}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
  },
  author: {
    fontSize: 18,
    color: "#888888",
    marginBottom: 8,
  },
  description: {
    fontSize: 20,
    marginBottom: 16,
    color: "#666666",
  },
  content: {
    fontSize: 18,
    marginBottom: 16,
    lineHeight: 24,
  },
  date: {
    fontSize: 16,
    color: "#888888",
    marginBottom: 8,
  },
  source: {
    fontSize: 16,
    color: "#888888",
  },
});

export default DetailsScreen;
