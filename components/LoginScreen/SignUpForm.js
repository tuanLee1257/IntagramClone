import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { firebase, db } from "../../firebase";

function SignUpForm({ navigation }) {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "Username must be at least 2 "),
    password: Yup.string()
      .required()
      .min(8, "Youur password has to have at least 8 characters"),
  });
  const onSginUp = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Firebase sign up successfull", email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values) => {
        onSginUp(values.email, values.password);
      }}
      validationSchema={SignUpFormSchema}
      validateOnMount={true}
    >
      {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
        <View>
          <View style={styles.wrapper}>
            <TextInput
              placeholder="Phone number, username or email"
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              style={[styles.inputField]}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#444"
              autoCapitalize="none"
              textContentType="username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              style={[styles.inputField]}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#444"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              style={styles.inputField}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
          </View>

          <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
          <View style={styles.signUpContainer}>
            <Text>Already have a account?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: "#6BB0F5" }}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    backgroundColor: "#FAFAFA",
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "white",
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
});
export default SignUpForm;
