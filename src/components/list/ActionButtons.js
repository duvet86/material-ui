import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import EditButton from "components/list/EditButton";
import DeleteButton from "components/list/DeleteButton";

const style = {
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  }
};

const ActionButtons = ({
  classes: { buttonContainer },
  record,
  pathname,
  disabledSource
}) =>
  <div className={buttonContainer}>
    <EditButton {...{ record, pathname, disabledSource }} />
    <DeleteButton {...{ record, disabledSource }} />
  </div>;

ActionButtons.propTypes = {
  record: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  disabledSource: PropTypes.string
};

export default injectSheet(style)(ActionButtons);
