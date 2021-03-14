import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link, useLocation } from "react-router-dom";
import firebaseConfig from "../config";

const TestReceive = () => {
  const db = firebaseConfig.firestore().collection("User");

  const [projects, setProject] = useState([]);

  let Location = useLocation();

  let Projectname = Location.value.Projectname;

  useEffect(() => {
    db.where("name", "==", `${Projectname}`).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setProject(items);
    });

    // console log project
    console.log(projects);
  }, []);

  return (
    <>
      <Link to="/">
        <Card>
          <h1 className="mt-3">Back... </h1>
        </Card>
      </Link>

      {/* this is a loop? -> can be enhance? */}
      {projects.map((project) => (
        <CardGroup key={project.name}>
          <Card>
            <Card.Body>
              <Card.Title className="mt-5">id:{project.name}</Card.Title>
              <Card.Text>{project.message}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </>
  );
};

export default TestReceive;
