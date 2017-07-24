import "index.css";

import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Switch } from "react-router-dom";

import asyncComponent from "lib/asyncComponent";
import apolloClient from "lib/apolloClient";
import registerServiceWorker from "lib/registerServiceWorker";

import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import UnauthenticatedRoute from "components/routes/UnauthenticatedRoute";
import RedirectToStartPageWithData from "components/routes/RedirectToStartPageWithData";
import AppWithData from "components/app/AppWithData";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <UnauthenticatedRoute
          exact
          path="/login"
          component={asyncComponent(() =>
            import("components/login/LoginContainer")
          )}
        />
        <AuthenticatedRoute path="/:appKey" component={AppWithData} />
        <AuthenticatedRoute component={RedirectToStartPageWithData} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
