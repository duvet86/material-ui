import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import CircularProgress from "material-ui/CircularProgress";

import ListIcon from "material-ui/svg-icons/action/list";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import SaveIcon from "material-ui/svg-icons/content/save";

import AppListSelectWithData from "components/rolesPage/appListSelect/AppListSelectWithData";

const AddEditRole = ({
  role: {
    id: roleId,
    name,
    description,
    appList,
    startApp: { id: startAppId }
  },
  path,
  handleNameChange,
  handleDescriptionChange,
  handleAppListChange,
  handleStartAppChange,
  handleSubmit,
  isLoadingRole
}) => {
  const isSubmitDisbled =
    !name || !description || appList.length === 0 || startAppId == null;

  return (
    <Card>
      <CardActions style={{ position: "absolute", right: "0" }}>
        <FlatButton
          containerElement={<Link to={path} />}
          label="List"
          primary={true}
          icon={<ListIcon />}
          style={{ overflow: "visible" }}
        />
        <FlatButton
          label="Delete"
          secondary={true}
          disabled={true}
          icon={<DeleteIcon />}
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
    </Card>
  );
};

AddEditRole.propTypes = {
  role: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    appList: PropTypes.array.isRequired,
    startApp: PropTypes.shape({
      id: PropTypes.string
    }).isRequired
  }).isRequired,
  path: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleAppListChange: PropTypes.func.isRequired,
  handleStartAppChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddEditRole;
