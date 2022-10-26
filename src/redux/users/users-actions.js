import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users-type";

// export const addUser = (user) => {
//   return {
//     type: ADD_USER,
//     payload: user,
//   };
// };

// export const deleteUser = (id) => {
//   return {
//     type: DELETE_USER,
//     payload: id,
//   };
// };

// export const updateUser = (id) => {
//   return {
//     type: UPDATE_USER,
//     payload: id,
//   };
// };

import { createAction } from "@reduxjs/toolkit";

export const addUser = createAction(ADD_USER)
export const deleteUser = createAction(DELETE_USER)
export const updateUser = createAction(UPDATE_USER)
