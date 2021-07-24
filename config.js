 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCc9tfi4L8BZF1gahT3chQlfd8OA6QOIoI",
  authDomain: "schoolattendanceapp-faa07.firebaseapp.com",
  databaseURL: "https://schoolattendanceapp-faa07-default-rtdb.firebaseio.com",
  projectId: "schoolattendanceapp-faa07",
  storageBucket: "schoolattendanceapp-faa07.appspot.com",
  messagingSenderId: "336198029713",
  appId: "1:336198029713:web:144c969e76604698fd0a30"
};
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig)
}
export default firebase.database();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  