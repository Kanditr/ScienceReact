import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import axios from "axios";

export default class TestSend extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.setState({
          post: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h3 className="mt-3"> Card </h3>

        {this.state.post.map((post) => {
          let Id = post.id;
          return (
            <CardGroup key={post.id} className="m-3">
              <Card>
                <Card.Body>
                  <Card.Title> {post.title} </Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>

                <Card.Footer>
                  <Link
                    to={{
                      pathname: "/testreceive",
                      value: { Id },
                    }}
                  >
                    <Card.Link>Read More...</Card.Link>
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
