import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FormikPostUploader from './FormikPostUploader';

function AddNewPost({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
}
function Header({navigation}) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" color={'#fff'} size={30} />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 20,
  },
});
export default AddNewPost;
