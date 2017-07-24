import { graphql } from "react-apollo";

import { applicationListQuery } from "components/applicationList/graphqlQueries";
import ApplicationList from "components/applicationList/ApplicationList";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    isLoading: loading,
    applications: applicationList,
    error
  })
};

export default graphql(applicationListQuery, queryOptions)(ApplicationList);
