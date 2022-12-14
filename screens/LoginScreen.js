import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import LoginForm from '../components/LoginScreen/LoginForm';

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Instagram_icon.png')}
        style={styles.logoContainer}
      />
      {/* Login form */}
      <LoginForm navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  logoContainer: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
});
export default LoginScreen;
