import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardActions, CardTitle, CardText } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import ListIcon from "material-ui/svg-icons/action/list";
import DeleteIcon from "material-ui/svg-icons/action/delete";
import SaveIcon from "material-ui/svg-icons/content/save";

import withLoading from "lib/withLoading";

import AppListSelectWithData from "components/core/appListMultiSelect/AppListSelectWithData";
import AppListSelect from "components/core/appListMultiSelect/AppListSelect";

const RoleRecord = ({
  role: { name, description, appList, startApp: { id } },
  path
}) =>
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
    <CardTitle title={`Edit Role: ${name}`} />
    <CardText>
      <form>
        <div>
          <TextField
            hintText="Description"
            floatingLabelText="Role Description"
            multiLine={true}
            fullWidth={true}
            defaultValue={description}
          />
        </div>
        <div>
          <AppListSelectWithData
            appSelectedIds={appList.map(({ id }) => id)}
            floatingLabelText="Applications accesible by this role"
            multiple={true}
          />
        </div>
        <div>
          <AppListSelect
            applicationList={appList}
            appSelectedIds={id}
            floatingLabelText="Default Application accessed after login"
          />
        </div>
      </form>
    </CardText>
    <CardActions
      style={{ backgroundColor: "rgb(232, 232, 232)", textAlign: "right" }}
    >
      <RaisedButton label="Save" primary={true} icon={<SaveIcon />} />
    </CardActions>
  </Card>;

RoleRecord.propTypes = {
  role: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default withLoading(RoleRecord);
