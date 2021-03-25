import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link, useLocation } from "react-router-dom";
import firebaseConfig from "../config";
import Header from "./Header";

const TestReceive = () => {
  const db = firebaseConfig.firestore().collection("projects");
  const [projects, setProject] = useState([]);
  let Location = useLocation();
  let Projectname = Location.value;

  console.log(Projectname);

  useEffect(() => {
    db.where("projectName", "==", `${Projectname}`).onSnapshot(
      (querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setProject(items);
      }
    );
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-5">
        {/* this is a loop? -> can be enhance? */}
        {projects.map((project) => (
          <CardGroup key={project.projectName}>
            <Card>
              <Card.Body>
                <Card.Title className="mt-5">{project.projectName}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
        <Link to="/">
          {/* <Card> */}
          <button className="btn btn-outline-primary mt-4">back</button>
          {/* </Card> */}
        </Link>
      </div>
    </>
  );
};

export default TestReceive;
