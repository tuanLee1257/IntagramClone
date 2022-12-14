import React from 'react';
import {Image, ScrollView, View, StyleSheet, Text} from 'react-native';
import users from '../../data/users';
function Stories(props) {
  return (
    <View>
      <ScrollView horizontal={true} showsVerticalScrollIndicato={false}>
        {users.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.imageURL}} style={styles.story} />
            <Text style={{color: 'white'}}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  story: {
    width: 50,
    height: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
    borderRadius: 50,
  },
});
export default Stories;
