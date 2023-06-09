import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  const navigation = useNavigation();

  const goToDetailsScreen = (article) => {
    console.log("HIII");
    navigation.navigate("Details", { article });
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => goToDetailsScreen(props)}
    >
      <Image source={{ uri: props.urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  image: {
    width: "100%",
    aspectRatio: 2,
    marginRight: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#888888",
  },
});
