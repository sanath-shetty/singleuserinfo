import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./components/pages/Users";
import UserInfo from "./components/pages/UserInfo";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/userinfo/:username" component={UserInfo} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
