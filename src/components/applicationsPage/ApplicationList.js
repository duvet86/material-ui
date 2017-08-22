import React from "react";

import Datagrid from "components/list/Datagrid";
import TextField from "components/list/TextField";
import ActionButtons from "components/list/ActionButtons";

const ListContainer = ({ data, pathname }) =>
  <Datagrid {...{ data, pathname }}>
    <TextField label="Application" source="label" />
    <TextField label="Description" source="description" />
    <ActionButtons disabledSource="isSystem" />
  </Datagrid>;

export default ListContainer;
