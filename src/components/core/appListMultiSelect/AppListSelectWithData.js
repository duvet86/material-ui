import { graphql } from "react-apollo";

import { applicationListQuery } from "components/core/appListMultiSelect/graphqlQueries";
import AppListSelect from "components/core/appListMultiSelect/AppListSelect";

const applicationListQueryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    error,
    applicationList,
    isLoading: loading
  })
};

export default graphql(applicationListQuery, applicationListQueryOptions)(
  AppListSelect
);
