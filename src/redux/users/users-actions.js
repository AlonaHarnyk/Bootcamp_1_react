import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users-type";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const updateUser = (id) => {
  return {
    type: UPDATE_USER,
    payload: id,
  };
};
