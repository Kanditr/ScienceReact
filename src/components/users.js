import React, { useState } from "react";
import firebaseConfig from "../config";

var db = firebaseConfig.firestore();

const Contact = () => {
  const [name, setName] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("User")
      .add({
        name: name,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>contact</h1>
      <label>name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button type="submit">submit</button>
    </form>
  );
};

export default Contact;
