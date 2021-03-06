import React, { Component } from "react";
import firebaseConfig from "../config";
import Header from "./Header";

var db = firebaseConfig.firestore();

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

  // componentWillMount() {
  //   let formRef = firebaseConfig
  //     .database()
  //     .ref("User")
  //     .orderByKey()
  //     .limitToLast(6);
  //   formRef.on("child_added", (snapshot) => {
  //     const { name, email, city, phone, message } = snapshot.val();
  //     const data = { name, email, city, phone, message };
  //     this.setState({ User: [data].concat(this.state.User) });
  //   });
  // }

  componentWillMount() {
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

  sendMessage(e) {
    e.preventDefault();
    const params = {
      name: this.inputName.value,
      email: this.inputEmail.value,
      city: this.inputCity.value,
      phone: this.inputPhone.value,
      message: this.textAreaMessage.value,
    };
    if (
      params.name &&
      params.email &&
      params.phone &&
      params.phone &&
      params.message
    ) {
      //  {
      //   firebaseConfig
      //     .database()
      //     .ref("User")
      //     .push(params)
      //     .then(() => {
      //       this.showAlert("success", "Your message was sent successfull");
      //     })
      //     .catch(() => {
      //       this.showAlert("danger", "Your message could not be sent");
      //     });
      //   this.resetForm();
      // }
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
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    ref={(email) => (this.inputEmail = email)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <select
                    className="form-control"
                    id="city"
                    ref={(city) => (this.inputCity = city)}
                  >
                    <option value="Bangkok">Bangkok</option>
                    <option value="Nonthaburi">Nonthaburi</option>
                    <option value="Pathumthani">Pathumthani</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="+66 0"
                    ref={(phone) => (this.inputPhone = phone)}
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
                    key={User.phone}
                    style={{ margin: `0px 0px 30px 0px` }}
                  >
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">{User.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {User.city}
                        </h6>
                        <p className="card-text">{User.message}</p>
                        <a href={`tel:${User.phone}`} className="card-link">
                          {User.phone}
                        </a>
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
