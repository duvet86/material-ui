import { graphql, compose } from "react-apollo";

import utility from "lib/utility";

import {
  roleByIdQuery,
  updateRoleMutation
} from "components/rolesPage/graphqlQueries";
import AddEditRoleContainer from "components/rolesPage/AddEditRoleContainer";

const queryOptions = {
  options: ({ match: { params: { id } } }) => ({
    variables: { roleId: id }
  }),
  props: ({
    ownProps: { location: { pathname } },
    data: { loading, error, roleById }
  }) => ({
    isLoading: loading,
    initRole: roleById,
    error,
    path: utility.backOfAToken(pathname)
  })
};

const makeQuery = compose(
  graphql(updateRoleMutation, { name: "updateRoleMutation" }),
  graphql(roleByIdQuery, queryOptions)
);

export default makeQuery(AddEditRoleContainer);
