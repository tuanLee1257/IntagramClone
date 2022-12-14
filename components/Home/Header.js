import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';

function Header({navigation}) {
  const size = 24;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        {/*  */}
        <Text style={styles.logo}>Instagram</Text>
        {/*  */}
      </TouchableOpacity>
      <View style={styles.iconContaierr}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Octicons name="diff-added" size={size} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="heart" size={size} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Feather name="message-circle" size={size} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
  <Image />;
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  iconContaierr: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    marginLeft: 10,
  },
  unreadBadge: {
    backgroundColor: '#FF4435',
    position: 'absolute',
    left: 24,
    bottom: 12,
    width: 25,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
  logo: {
    color: 'white',
    fontSize: 24,
  },
});
export default Header;
