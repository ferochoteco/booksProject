import firebase from '@firebase/app';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAM7Iw7AgGxjMwclkL6DSdFQkT9XxmBKwA",
  authDomain: "react-native-18590.firebaseapp.com",
  databaseURL: "https://react-native-18590.firebaseio.com",
  projectId: "react-native-18590",
  storageBucket: "react-native-18590.appspot.com"
};

const fbConnection = firebase.initializeApp(firebaseConfig);

export const createUser = (email, password) => {
  return fbConnection.auth().createUserWithEmailAndPassword(email, password);
}

export const loginUser = (email, password) => {
  return fbConnection.auth().signInWithEmailAndPassword(email, password);
}
