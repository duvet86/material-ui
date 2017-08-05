import { graphql } from "react-apollo";

import { applicationListQuery } from "components/applicationsPage/graphqlQueries";
import ApplicationList from "components/applicationsPage/ApplicationsList";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    isLoading: loading,
    applications: applicationList,
    error
  })
};

export default graphql(applicationListQuery, queryOptions)(ApplicationList);
