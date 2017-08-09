import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import CircularProgress from "material-ui/CircularProgress";

import ListIcon from "material-ui/svg-icons/action/list";
import SaveIcon from "material-ui/svg-icons/content/save";

import { backOfAToken } from "lib/utility";

import ActionFeedback from "components/core/ActionFeedback";
import AppListSelectWithData from "components/rolesPage/appListSelect/AppListSelectWithData";

const AddEditRole = ({
  role: {
    id: roleId,
    name,
    description,
    appList,
    startApp: { id: startAppId }
  },
  location: { pathname },
  handleNameChange,
  handleDescriptionChange,
  handleAppListChange,
  handleStartAppChange,
  handleSubmit,
  isLoadingRole,
  isActionFeedbackOpen,
  actionFeedbackMessage,
  onActionFeedbackClose
}) => {
  const isSubmitDisbled =
    !name || !description || appList.length === 0 || startAppId == null;

  return (
    <Card>
      <CardActions style={{ position: "absolute", right: "0" }}>
        <FlatButton
          containerElement={<Link to={backOfAToken(pathname)} />}
          label="List"
          primary={true}
          icon={<ListIcon />}
          style={{ overflow: "visible" }}
        />
      </CardActions>
      <CardTitle title={roleId ? "Edit Role" : "Add Role"} />
      <form onSubmit={handleSubmit}>
        <CardText>
          <div>
            <TextField
              hintText="Name"
              floatingLabelText="Role Name"
              fullWidth={true}
              defaultValue={name}
              onChange={handleNameChange}
              disabled={isLoadingRole}
            />
          </div>
          <div>
            <TextField
              hintText="Description"
              floatingLabelText="Role Description"
              multiLine={true}
              fullWidth={true}
              defaultValue={description}
              onChange={handleDescriptionChange}
              disabled={isLoadingRole}
            />
          </div>
          <div>
            <AppListSelectWithData
              appListValueIds={appList.map(({ id }) => id)}
              startAppValueId={startAppId}
              handleAppListChange={handleAppListChange}
              handleStartAppChange={handleStartAppChange}
              disabled={isLoadingRole}
            />
          </div>
        </CardText>
        <CardActions
          style={{ backgroundColor: "rgb(232, 232, 232)", textAlign: "right" }}
        >
          <RaisedButton
            label="Save"
            type="submit"
            primary={true}
            icon={isLoadingRole ? <CircularProgress size={25} /> : <SaveIcon />}
            disabled={isLoadingRole || isSubmitDisbled}
          />
        </CardActions>
      </form>
      <ActionFeedback
        isOpen={isActionFeedbackOpen}
        message={actionFeedbackMessage}
        onRequestClose={onActionFeedbackClose}
      />
    </Card>
  );
};

AddEditRole.propTypes = {
  role: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    appList: PropTypes.array.isRequired,
    startApp: PropTypes.shape({
      id: PropTypes.string
    }).isRequired
  }).isRequired,
  location: PropTypes.object.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleAppListChange: PropTypes.func.isRequired,
  handleStartAppChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isActionFeedbackOpen: PropTypes.bool.isRequired,
  onActionFeedbackClose: PropTypes.func.isRequired,
  actionFeedbackMessage: PropTypes.string.isRequired
};

export default AddEditRole;
