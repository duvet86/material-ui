import React from "react";
import { Switch, Route } from "react-router-dom";

import asyncComponent from "lib/asyncComponent";
import * as mapping from "lib/componentMapping";
import withLoading from "lib/withLoading";

import NotFoundRoute from "components/routes/NotFoundRoute";

const PageBody = ({ style, routes }) =>
  <div style={style}>
    <Switch>
      {routes.map(({ id, location, component }) =>
        <Route
          key={id}
          exact
          path={`/:appKey${location}`}
          component={mapping[component]}
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

export default withLoading(PageBody);
