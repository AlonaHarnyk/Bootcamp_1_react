import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    updateUser: (state, { payload }) => {
      const index = state.users.findIndex((user) => user.id === payload);
      state.users[index] = {
        ...state.users[index],
        status: state.users[index].status === "yes" ? "no" : "yes",
      };
    },
  },
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
