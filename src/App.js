import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/Login";
import signup from "./components/signup";
import Create from "./components/createproject";
import { AuthProvider } from "./components/Auth";
import PageViewProject from "./components/PageViewProject";
import TestSend from "./components/TestSend";
import TestReceive from "./components/TestReceive";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/createproject" component={Create} />
          <Route exact path="/project" component={PageViewProject} />
          <Route exact path="/testsend" component={TestSend} />
          <Route exact path="/testreceive" component={TestReceive} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
