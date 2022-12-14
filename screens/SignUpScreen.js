import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import SignUpForm from '../components/LoginScreen/SignUpForm';

function SignUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Instagram_icon.png')}
        style={styles.logoContainer}
      />
      {/* Login form */}
      <SignUpForm navigation={navigation} />
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
export default SignUpScreen;
