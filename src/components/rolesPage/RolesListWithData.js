import { graphql, compose } from "react-apollo";

import {
  rolesListQuery,
  archiveRoleMutation
} from "components/rolesPage/graphqlQueries";
import RolesListContainer from "components/rolesPage/RolesListContainer";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, roles } }) => ({
    pageTitle: "Manage Roles",
    columnHeaders: ["name", "description"],
    labelProperty: "name",
    isLoading: loading,
    itemList: roles,
    error
  })
};

const makeQuery = compose(
  graphql(archiveRoleMutation),
  graphql(rolesListQuery, queryOptions)
);

export default makeQuery(RolesListContainer);
