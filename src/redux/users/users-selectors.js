export const selectUsers = (state) => state.users.items;
export const selectIsLoading = (state) => state.users.isLoading;
export const selectError = (state) => state.users.error;

// import { createSelector } from "@reduxjs/toolkit";

// const selectContacts = (state) => state.contacts.items;
// const selectFilter = (state) => state.contacts.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) =>
//     contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     )
// );
