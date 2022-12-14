import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import BottomTab from '../components/Home/BottomTab';
import Header from '../components/Home/Header';
import Posts from '../components/Home/Posts';
import Stories from '../components/Home/Stories';
import BottomTabIcons from '../data/BottomTabIcons';
import posts from '../data/posts';

function HomeScreen({navigation}) {
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
    backgroundColor: 'black',
    flex: 1,
  },
});
export default HomeScreen;
