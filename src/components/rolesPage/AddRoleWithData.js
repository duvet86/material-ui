import { graphql } from "react-apollo";

import { createRoleMutation } from "components/rolesPage/graphqlQueries";
import AddEditRoleContainer from "components/rolesPage/AddEditRoleContainer";

export default graphql(createRoleMutation)(AddEditRoleContainer);
