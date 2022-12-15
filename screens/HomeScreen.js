import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Platform,
} from "react-native";
import BottomTab from "../components/Home/BottomTab";
import Header from "../components/Home/Header";
import Posts from "../components/Home/Posts";
import Stories from "../components/Home/Stories";
import BottomTabIcons from "../data/BottomTabIcons";
import firebase from "../firebase";
const db = firebase.firestore();

function HomeScreen({ navigation }) {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((story, index) => (
          <Posts post={story} key={index} />
        ))}
      </ScrollView>
      <BottomTab icons={BottomTabIcons} />
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
export default HomeScreen;
