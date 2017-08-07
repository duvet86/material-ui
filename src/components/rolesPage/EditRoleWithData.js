import { graphql } from "react-apollo";

import utility from "lib/utility";

import { roleByIdQuery } from "components/rolesPage/graphqlQueries";
import EditRoleContainer from "components/rolesPage/EditRoleContainer";

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

export default graphql(roleByIdQuery, queryOptions)(EditRoleContainer);
