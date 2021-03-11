import React, { Component, componentDidMount } from "react";
import firebaseConfig from "../config";

var db = firebaseConfig.firestore();

class SectionProject extends Component {
  //   have to clean this constructor -> can we use [user, setUser] instead?
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    db.collection("User")
      .get()
      .then((snapshot) => {
        const user = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          user.push(data);
        });
        this.setState({ user: user });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="mt-5">
          <div className="col-sm-12">
            <div className="row row-cols-3">
              {this.state.user.map((user) => (
                <div
                  className="col-sm-4"
                  key={user.fund}
                  style={{ margin: `0px 0px 30px 0px` }}
                >
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">{user.name}</h4>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {user.type}
                      </h6>
                      <p className="card-text">{user.message}</p>
                      <p className="card-text">{user.fund}</p>
                      <a href={`mailto:${user.email}`} className="card-link">
                        {user.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionProject;
