import React, { useEffect, useState } from "react";
import { SignInStack, SignOutStack } from "./screens/Navigation";
import firebase from "./firebase";
function AuthNavigation(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);
  useEffect(
    () => firebase.auth().onAuthStateChanged((user) => userHandler(user)),
    []
  );
  return <>{currentUser ? <SignInStack /> : <SignOutStack />}</>;
}

export default AuthNavigation;
