import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "./Nav.jsx";
import Auth from "../routes/Auth.jsx";
import EditProfile from "../routes/EditProfile";
import Profile from "../routes/Profile";
import Home from "../routes/Home.jsx";

export default function AppRouter(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <Router>
      {isLoggedIn && <Nav />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Redirect from="*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth></Auth>
            </Route>

            <Redirect from="*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
}
