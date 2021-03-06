import React, { Component } from "react";
import PropTypes from "prop-types";

import muiTheme from "lib/muiTheme";
import withLoading from "lib/withLoading";

import App from "components/appFrame/app/App";
import NotFoundRoute from "components/routes/NotFoundRoute";

class AppContainer extends Component {
  static propTypes = {
    applications: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        appKey: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      drawerOpen: true
    };
  }

  componentWillMount() {
    this.setState({ drawerOpen: window.innerWidth > 500 });
  }

  render() {
    const { applications, location, match } = this.props;
    const { params: { appKey } } = match;

    const contentStyle = {
      marginLeft: this.state.drawerOpen ? "21em" : "15px"
    };

    const app = applications.find(({ key }) => key === appKey);
    if (app) {
      return (
        <App
          muiTheme={muiTheme}
          drawerState={this.state.drawerOpen}
          handleToggle={this._handleToggle}
          contentStyle={contentStyle}
          appList={applications}
          currentAppLabel={app.label}
          currentAppKey={app.key}
          location={location}
          match={match}
        />
      );
    }
    return <NotFoundRoute />;
  }

  _handleToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });
}

export default withLoading(AppContainer);
