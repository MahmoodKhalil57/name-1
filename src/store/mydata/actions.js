// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
// import db from "src/boot/firebase";

// const auth = getAuth();

/*
export function someAction (context) {
}
*/

// export function testTest(_, hmm = "5od") {
//   console.log(hmm);
// }

// export function registerUser({ }, payload) {
//   console.log(payload);
//   createUserWithEmailAndPassword(auth, payload.email, payload.password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//       let userId = user.uid;

//       const productsCol = collection(db, "users");
//       addDoc(productsCol, {
//         email: user.email,
//         junk: "junk",
//       });
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// }

// export function loginUser({ }, payload) {
//   console.log(payload);
//   signInWithEmailAndPassword(auth, payload.email, payload.password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// }

// export function handleAuthStateChanged({ }) {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });
// }
