import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/common/ui/navBar";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./layouts/users";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/login/:type?" component={Login} />
        <Route path="/users/:userId?/:edit?" component={Users} />
        <Route exact path="/" component={Main} />
        <Route path="/" />
      </Switch>
    </>
  );
}

export default App;
