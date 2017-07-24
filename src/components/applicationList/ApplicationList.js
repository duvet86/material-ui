import React from "react";
import PropTypes from "prop-types";
import { List } from "material-ui/List";

import Application from "components/applicationList/Application";

const ApplicationList = ({ applications, handleArchiveApp }) => {
  const items = applications.map(app => {
    const boundEvent = () => handleArchiveApp(app.id);
    return (
      <Application
        key={app.id}
        id={app.id}
        label={app.label}
        handleArchiveApp={boundEvent}
      />
    );
  });

  return (
    <List>
      {items}
    </List>
  );
};

ApplicationList.propTypes = {
  applications: PropTypes.array.isRequired,
  handleArchiveApp: PropTypes.func.isRequired
};

export default ApplicationList;
