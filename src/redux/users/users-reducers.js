// import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users-type";

// export const usersReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_USER:
//       return [...state, payload];
//     case DELETE_USER:
//       return state.filter((user) => user.id !== payload);
//     case UPDATE_USER:
//       return state.map((user) => {
//         if (user.id === payload) {
//           if (user.status === "yes") {
//             user.status = "no";
//           } else {
//             user.status = "yes";
//           }
//         }
//         return user;
//       });
//     default:
//       return state;
//   }
// };

import { createReducer } from "@reduxjs/toolkit";
import { addUser, deleteUser, updateUser } from "./users-actions";

export const usersReducer = createReducer([], {
  [addUser]: (state, { payload }) => [...state, payload],
  [deleteUser]: (state, { payload }) =>
    state.filter((user) => user.id !== payload),
  [updateUser]: (state, { payload }) =>
    state.map((user) => {
      if (user.id === payload) {
        const status = user.status === "yes" ? "no" : "yes";
        return { ...user, status };
      } else {
        return user;
      }
    }),
});
