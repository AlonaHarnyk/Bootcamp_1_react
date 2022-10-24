import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users-type";

export const usersReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return [...state, payload];
    case DELETE_USER:
      return state.filter(user => user.id !== payload)
    case UPDATE_USER:
      return;
    default:
      return state;
  }
};
