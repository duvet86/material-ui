import { graphql } from "react-apollo";

import { applicationListQuery } from "components/rolesPage/appListSelect/graphqlQueries";
import AppListSelect from "components/rolesPage/appListSelect/AppListSelect";

const applicationListQueryOptions = {
  props: ({ ownProps, data: { loading, error, applications } }) => ({
    applications,
    isLoading: loading,
    error
  })
};

export default graphql(applicationListQuery, applicationListQueryOptions)(
  AppListSelect
);
