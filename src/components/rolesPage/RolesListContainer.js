// import { rolesListQuery } from "components/rolesPage/graphqlQueries";

// import createListContainer from "lib/list/createListContainer";

// function updateFunc(store, { data: { archiveRole: roleIdToDelete } }) {
//   // Read the data from our cache for this query.
//   const data = store.readQuery({ query: rolesListQuery });
//   const index = data.roles.findIndex(({ id }) => id === roleIdToDelete);
//   if (index === -1) {
//     return;
//   }

//   data.roles.splice(index, 1);
//   // Write our data back to the cache.
//   store.writeQuery({ query: rolesListQuery, data });
// }

// export default createListContainer(updateFunc);
