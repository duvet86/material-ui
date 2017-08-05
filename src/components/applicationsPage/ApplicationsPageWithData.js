import { graphql } from "react-apollo";

import { applicationsListQuery } from "components/applicationsPage/graphqlQueries";
import ApplicationList from "components/applicationsPage/ApplicationsList";

const queryOptions = {
  props: ({ ownProps, data: { loading, error, applicationList } }) => ({
    isLoading: loading,
    applications: applicationList,
    error
  })
};

export default graphql(applicationsListQuery, queryOptions)(ApplicationList);
