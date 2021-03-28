import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import signup from "./components/signup";
import { AuthProvider } from "./components/Auth";
import PageViewProject from "./components/PageViewAllProject";
import Viewproject from "./components/PageViewProject";
import PageLogin from "./components/PageLogin";
import CreateProjectV2 from "./components/PageCreateProject";
import Fundproject from "./components/PageFundProject";
import Fundsuccess from "./components/PageFundSuccess";
import PageViewAllProject from "./components/PageViewAllProject";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/createproject" component={CreateProjectV2} />
          <Route exact path="/project" component={PageViewProject} />
          <Route exact path="/viewproject" component={Viewproject} />
          <Route exact path="/login" component={PageLogin} />
          <Route exact path="/fundproject" component={Fundproject} />
          <Route exact path="/fundsuccess" component={Fundsuccess} />
          <Route exact path="/viewallprojects" component={PageViewAllProject} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
