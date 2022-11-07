import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Login from "./components/login";
import Users from "./components/users";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/main" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/users" component={Users} />
            </Switch>
        </div>
    );
}

export default App;
