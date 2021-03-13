import React, { userState, useEffect, useState } from "react";
import firebaseConfig from "../config";

function TestRealtimeFetching() {
  const [projects, setProject] = useState([]);

  const db = firebaseConfig.firestore().collection("User");

  function getProject() {
    db.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProject(items);
    });
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div>
      <div className="container">
        {projects.map((project) => (
          <div className="container" key={project.id}>
            <h1>{project.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestRealtimeFetching;
