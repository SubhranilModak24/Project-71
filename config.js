import firebase from "firebase";
//require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCD1FyUiyWNWrPViobDClEevqe3i5lrdLg",
  authDomain: "project-71-2a8a7.firebaseapp.com",
  projectId: "project-71-2a8a7",
  storageBucket: "project-71-2a8a7.appspot.com",
  messagingSenderId: "416173256342",
  appId: "1:416173256342:web:06bdd1e091eb71b2e15cb7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


