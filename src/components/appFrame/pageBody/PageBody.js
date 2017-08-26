import React from "react";
import { Switch, Route } from "react-router-dom";
import injectSheet from "react-jss";

import asyncComponent from "lib/asyncComponent";
import componentMapping from "lib/componentMapping";
import withLoading from "lib/withLoading";

import NotFoundRoute from "components/routes/NotFoundRoute";

const style = {
  containerClass: {
    transition: "margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)",
    marginRight: "1.1em"
  }
};

const PageBody = ({ classes: { containerClass }, style, routes }) =>
  <div className={containerClass} style={style}>
    <Switch>
      {routes.map(({ id, location, component }) =>
        <Route
          key={id}
          exact
          path={`/:appKey${location}`}
          component={componentMapping[component]}
        />
      )}
      <Route
        exact
        path="/:appKey/settings"
        component={asyncComponent(() =>
          import("components/staticPages/Settings")
        )}
      />
      <Route
        exact
        path="/:appKey/profile"
        component={asyncComponent(() =>
          import("components/staticPages/Profile")
        )}
      />
      <NotFoundRoute />
    </Switch>
  </div>;

export default withLoading(injectSheet(style)(PageBody));
