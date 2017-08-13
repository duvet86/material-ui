import { graphql, compose } from "react-apollo";

import {
  roleByIdQuery,
  updateRoleMutation
} from "components/rolesPage/graphqlQueries";
import AddEditRoleContainer from "components/rolesPage/AddEditRoleContainer";

const queryOptions = {
  options: ({ match: { params: { id } } }) => ({
    variables: { id }
  }),
  props: ({ ownProps, data: { loading, error, roleById } }) => ({
    isLoading: loading,
    initRole: roleById,
    error
  })
};

const makeQuery = compose(
  graphql(updateRoleMutation),
  graphql(roleByIdQuery, queryOptions)
);

export default makeQuery(AddEditRoleContainer);
