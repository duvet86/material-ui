import { graphql } from "react-apollo";

import { menuByAppKeyQuery } from "components/leftDrawer/graphqlQueries";
import LeftDrawer from "components/leftDrawer/LeftDrawer";

export default graphql(menuByAppKeyQuery, {
  options: ({ appKey }) => ({
    variables: { appKey: appKey }
  }),
  props: ({ ownProps, data: { loading, error, applicationByAppKey } }) => ({
    isLoading: loading,
    menu: applicationByAppKey && applicationByAppKey.menu,
    appKey: ownProps.appKey,
    error
  })
})(LeftDrawer);
