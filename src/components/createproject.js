import React, { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import firebaseConfig from "../config";
import { AuthContext } from "./Auth";
import Header from "./Header";
import LogIn from "./Login";

var db = firebaseConfig.firestore();
// const { currentUser } = useContext(AuthContext);

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      alert: false,
      alertData: {},
    };
  }

  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message },
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  }

  resetForm() {
    this.refs.contactForm.reset();
  }

  componentDidMount() {
    db.collection("User")
      .get()
      .then((snapshot) => {
        const User = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          User.push(data);
        });
        this.setState({ User: User });
      });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   let user = firebaseConfig.auth().currentUser;
  //   // let path = `login`;
  //   if (user) {
  //     console.log("Hi ja");
  //   } else {
  //     <Route exact path="/" />;
  //     // useHistory.push(path);
  //     // alert("hehe");
  //     console.log("Hi ja 55");
  //   }
  // }

  // routeChange = () => {
  //   let path = `newPath`;
  //   let history = useHistory();
  //   history.push(path);
  // };

  sendMessage(e) {
    e.preventDefault();
    let user = firebaseConfig.auth().currentUser;
    // console.log("hi ja");
    if (user) {
      const params = {
        name: this.inputName.value,
        email: user.email,
        // email: this.inputEmail.value,
        type: this.inputType.value,
        fund: this.inputFund.value,
        message: this.textAreaMessage.value,
      };
      if (
        params.name &&
        params.email &&
        params.type &&
        params.fund &&
        params.message
      ) {
        db.collection("User")
          .add(params)
          .then(() => {
            this.showAlert("success", "Your message was sent successfull");
          })
          .catch(() => {
            this.showAlert("danger", "Your message could not be sent");
          });
        this.resetForm();
      } else {
        this.showAlert("warning", "Please fill the form");
      }
    }
  }

  // sendMessage(e) {
  //   e.preventDefault();
  //   <Redirect to="/" />;
  // }

  render() {
    return (
      <div>
        <Header />
        {this.state.alert && (
          <div
            className={`alert alert-${this.state.alertData.type}`}
            role="alert"
          >
            <div className="container">{this.state.alertData.message}</div>
          </div>
        )}
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
                {/* <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    ref={(email) => (this.inputEmail = email)}
                  />
                </div> */}
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select
                    className="form-control"
                    id="type"
                    ref={(type) => (this.inputType = type)}
                  >
                    <option value="Tech">Tech</option>
                    <option value="Science">Science</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="fund">Fund</label>
                  <input
                    type="number"
                    className="form-control"
                    id="fund"
                    placeholder="3000 THB"
                    ref={(fund) => (this.inputFund = fund)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    style={{ margin: `0px 0px 10px 0px` }}
                    ref={(message) => (this.textAreaMessage = message)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ margin: `0px 0px 10px 0px` }}
                  onClick={this.handleSubmit}
                >
                  Send
                </button>
              </form>
            </div>
            <div className="col-sm-8">
              <div className="row">
                {this.state.User.map((User) => (
                  <div
                    className="col-sm-6"
                    key={User.fund}
                    style={{ margin: `0px 0px 30px 0px` }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">{User.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {User.type}
                        </h6>
                        <p className="card-text">{User.message}</p>
                        <p className="card-text">{User.fund}</p>
                        <a href={`mailto:${User.email}`} className="card-link">
                          {User.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
