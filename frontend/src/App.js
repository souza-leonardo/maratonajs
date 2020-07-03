import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ManageLinks from "./screens/Manage/Links";
import ManageLinksCreate from "./screens/Manage/Links/Create";
import ManageLinksEdit from "./screens/Manage/Links/Edit";
import Home from "./screens/Home";

import { initAccount } from "./actions/AccountActions";

const App = ({ initAccount }) => {
  useEffect(() => {
    initAccount();
  }, [initAccount]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/manage/links/create">
          <ManageLinksCreate />
        </Route>
        <Route path="/manage/links/edit/:id">
          <ManageLinksEdit />
        </Route>
        <Route path="/manage/links">
          <ManageLinks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account.account };
};

export default connect(mapStateToProps, { initAccount })(App);
