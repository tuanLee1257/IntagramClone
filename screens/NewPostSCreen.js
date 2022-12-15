import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AddNewPost from "../components/NewPost/AddNewPost";

function NewPostSCreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS == "ios" ? 0 : 25,
  },
});

export default NewPostSCreen;
