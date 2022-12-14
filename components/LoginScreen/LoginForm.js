import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Alert, Pressable } from "react-native";
import { TextInput } from "react-native";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "../../firebase";
import "firebase/compat/auth";

function LoginForm({ navigation }) {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Youur password has to have at least 8 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Firebase login successfull", email, password);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        onLogin(values.email, values.password);
      }}
      validationSchema={LoginFormSchema}
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
          <TouchableOpacity
            style={{ alignItems: "flex-end", marginBottom: 30 }}
          >
            <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
          </TouchableOpacity>
          <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View style={styles.signUpContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
              <Text style={{ color: "#6BB0F5" }}> Sign Up</Text>
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
export default LoginForm;
