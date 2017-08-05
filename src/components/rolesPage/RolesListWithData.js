import { graphql } from "react-apollo";

import { rolesListQuery } from "components/rolesPage/graphqlQueries";
import RolesListContainer from "components/rolesPage/RolesListContainer";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, roles } }) => ({
    isLoading: loading,
    roles,
    error
  })
};

export default graphql(rolesListQuery, queryOptions)(RolesListContainer);
