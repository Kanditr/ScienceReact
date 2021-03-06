import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/Login";
import signup from "./components/signup";
import Create from "./components/createproject";
// import users from "./components/users";
import { AuthProvider } from "./components/Auth";

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
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
