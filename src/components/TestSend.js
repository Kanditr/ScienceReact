import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import firebaseConfig from "../config";

const db = firebaseConfig.firestore().collection("User");

export default class TestSend extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    db.limit(10).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      this.setState({
        post: items,
      });
    });
  }

  render() {
    return (
      <>
        <h3 className="mt-3"> Card </h3>

        {this.state.post.map((post) => {
          let Projectname = post.name;
          return (
            <CardGroup key={post.name} className="m-3">
              <Card>
                <Card.Body>
                  <Card.Title> {post.name} </Card.Title>
                  <Card.Text>{post.message}</Card.Text>
                </Card.Body>

                <Card.Footer>
                  <Link
                    to={{
                      pathname: "/testreceive",
                      value: { Projectname },
                    }}
                  >
                    <Card>Read More...</Card>
                  </Link>
                </Card.Footer>
              </Card>
            </CardGroup>
          );
        })}
      </>
    );
  }
}
