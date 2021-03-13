import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link, useLocation } from "react-router-dom";

const TestReceive = (props) => {
  // use hook
  const [title, settitle] = useState();
  const [body, setbody] = useState();
  const [id, setid] = useState();

  let Location = useLocation();

  console.log(Location);
  console.log(props, "props");
  let Id = Location.value.Id;

  console.log(Id, " Location.data.Id id here new");

  useEffect(() => {
    axios(` https://jsonplaceholder.typicode.com/posts/${Id} `)
      .then((data) => {
        let gettitle = data.data.title;
        let getbody = data.data.body;
        let getid = data.data.id;

        settitle(gettitle);
        setbody(getbody);
        setid(getid);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Link to="/testsend">
        <Card.Link>
          <h1 className="mt-3">Back... </h1>
        </Card.Link>
      </Link>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title className="mt-5">
              id:{id}. {title}
            </Card.Title>
            <Card.Text>{body}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default TestReceive;
