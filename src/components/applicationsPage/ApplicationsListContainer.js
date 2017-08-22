import React from "react";

import { applicationsListQuery } from "components/applicationsPage/graphqlQueries";

import ListContainer from "components/list/ListContainer";
import ApplicationList from "components/applicationsPage/ApplicationList";

// TODO: add delete query
function updateFunc(store, { data: { archiveApplication: appIdToDelete } }) {
  // Read the data from our cache for this query.
  const data = store.readQuery({ query: applicationsListQuery });
  const index = data.applications.findIndex(({ id }) => id === appIdToDelete);
  if (index === -1) {
    return;
  }

  data.applications.splice(index, 1);
  // Write our data back to the cache.
  store.writeQuery({ query: applicationsListQuery, data });
}

const ApplicationsListContainer = props =>
  <ListContainer
    pageTitle="Manage Applications"
    labelProperty="label"
    updateFunc={updateFunc}
    {...props}
  >
    <ApplicationList />
  </ListContainer>;

export default ApplicationsListContainer;
