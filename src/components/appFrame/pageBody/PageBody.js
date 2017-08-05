import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "react-flexbox-grid";

import asyncComponent from "lib/asyncComponent";
import componentMapping from "lib/componentMapping";
import withLoading from "lib/withLoading";

import NotFoundRoute from "components/routes/NotFoundRoute";

const PageBody = ({ style, routes }) =>
  <Grid fluid style={style}>
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
  </Grid>;

export default withLoading(PageBody);