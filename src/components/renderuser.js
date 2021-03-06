import React from "react";
import db from "../config";

class Render extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    console.log("mounted");
    db.collection("User")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
      })
      .catch((error) => console.log(error));
  }
}

export default Render;
