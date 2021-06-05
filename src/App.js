import React from "react";
import firebase from "firebase";
import { provider, auth } from "./firebase";
function App() {
  const loGin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("d");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div>
      <button onClick={loGin}>Login via Google</button>
    </div>
  );
}

export default App;
