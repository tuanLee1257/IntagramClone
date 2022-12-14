import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import AddNewPost from '../components/NewPost/AddNewPost';
import FormikPostUploader from '../components/NewPost/FormikPostUploader';

function NewPostSCreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}

export default NewPostSCreen;
