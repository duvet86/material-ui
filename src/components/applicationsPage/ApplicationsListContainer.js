import React from "react";

//import { applicationsListQuery } from "components/applicationsPage/graphqlQueries";
import withLoading from "lib/withLoading";

import Datagrid from "components/list/Datagrid";
import TextField from "components/list/TextField";
import ActionButtons from "components/list/ActionButtons";

//import createListContainer from "lib/list/createListContainer";

// // TODO: add delete query
// function updateFunc(store, { data: { archiveApplication: appIdToDelete } }) {
//   // Read the data from our cache for this query.
//   const data = store.readQuery({ query: applicationsListQuery });
//   const index = data.applications.findIndex(({ id }) => id === appIdToDelete);
//   if (index === -1) {
//     return;
//   }

//   data.applications.splice(index, 1);
//   // Write our data back to the cache.
//   store.writeQuery({ query: applicationsListQuery, data });
// }

// export default createListContainer(updateFunc);

const ListContainer = ({ applications, location: { pathname } }) =>
  <Datagrid data={applications} pathname={pathname}>
    <TextField label="Application" source="label" />
    <TextField label="Description" source="description" />
    <ActionButtons disabledSource="isSystem" />
  </Datagrid>;

export default withLoading(ListContainer);
