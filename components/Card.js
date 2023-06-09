import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Card(props) {
  const navigation = useNavigation();

  const goToDetailsScreen = (article) => {
    console.log("HIII");
    navigation.navigate("Details", { article });
  };
  return (
    <TouchableOpacity onPress={() => goToDetailsScreen(props)}>
      <View style={styles.container}>
        <Image source={{ uri: props.urlToImage }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    width: "100%",
    borderBottomColor: "#EAEAEA",
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },
  contentContainer: {
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
