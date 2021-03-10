import React, { Component, useContext } from "react";
// import { Redirect } from "react-router";
import firebaseConfig from "../config";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import LogIn from "./Login";

var db = firebaseConfig.firestore();

class Testcreateproject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      alert: false,
      alertData: {},
      login: false,
    };
  }

  checklogin() {
    let user = firebaseConfig.auth().currentUser;
    if (user) {
      this.setState({
        login: false,
      });
    }
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

  sendMessage(e) {
    e.preventDefault();

    if ((this.state.login = true)) {
      const params = {
        name: this.inputName.value,
      };
      db.collection("User").add(params);
      this.resetForm();
      console.log("BBB");
    } else {
      this.state.history.push("/");
      console.log("AAA");
    }
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ padding: `40px 15px 0px 15px` }}>
          <div className="row">
            <div className="col-sm-4">
              <h2>Project</h2>
              <form onSubmit={this.sendMessage.bind(this)} ref="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    ref={(name) => (this.inputName = name)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ margin: `0px 0px 10px 0px` }}
                >
                  Send
                </button>
              </form>
            </div>
            {/* <div className="col-sm-8">
              <div className="row">
                {this.state.User.map((User) => (
                  <div
                    className="col-sm-6"
                    key={User.name}
                    style={{ margin: `0px 0px 30px 0px` }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">{User.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Testcreateproject);
