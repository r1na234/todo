// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

export function writeUserData(userId: any, email: string) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    email: email,
  });
}

// export function writeProjectData(userId, projectName, deadline) {
//     const db = getDatabase();
//     set(ref(db, 'projects/' + userId), {
//         projectName: projectName,
//         deadline: deadline,
//     });
//   }


const firebaseConfig = {
  apiKey: "AIzaSyD64q5ywDp_ECa9-U60yDIvvD8BX0lgnEE",
  authDomain: "todobasic-2c867.firebaseapp.com",
  databaseURL: "https://todobasic-2c867-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todobasic-2c867",
  storageBucket: "todobasic-2c867.appspot.com",
  messagingSenderId: "172952228895",
  appId: "1:172952228895:web:5c413e7fa65219fe52312a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const createUser = async (email: string, password: string) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
  }

  export const signInUser = async (email: string, password: string) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
  }
  
