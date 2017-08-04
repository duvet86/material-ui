import { graphql } from "react-apollo";

import { formItemsQuery } from "components/formBuilder/graphqlQueries";
import FormBuilderContainer from "components/formBuilder/FormBuilderContainer";

const formItemsQueryOptions = {
  props: ({ ownProps, data: { loading, error, formItems } }) => ({
    isLoading: loading,
    formItems,
    error
  })
};

export default graphql(formItemsQuery, formItemsQueryOptions)(
  FormBuilderContainer
);
