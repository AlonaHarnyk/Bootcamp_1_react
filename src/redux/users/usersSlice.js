import { fetchUsers, deleteUser, addUser } from "./users-operations";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "users",
//   initialState: { items: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchUsers.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [fetchUsers.fulfilled]: (state, { payload }) => {
//       state.items = payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [fetchUsers.rejected]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     [deleteUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [deleteUser.fulfilled]: (state, { payload }) => {
//       state.items = state.items.filter(({ id }) => id !== payload);
//       state.isLoading = false;
//       state.error = null;
//     },
//     [deleteUser.rejected]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//     [addUser.pending]: (state) => {
//       state.isLoading = true;
//     },
//     [addUser.fulfilled]: (state, { payload }) => {
//       state.items = [...state.items, payload];
//       state.isLoading = false;
//       state.error = null;
//     },
//     [addUser.rejected]: (state, { payload }) => {
//       state.error = payload;
//       state.isLoading = false;
//     },
//   },
// });

const userSlice = createSlice({
  name: "users",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(addUser.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
      })
      .addMatcher(
        isAnyOf(fetchUsers.fulfilled, deleteUser.fulfilled, addUser.fulfilled),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchUsers.pending, deleteUser.pending, addUser.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchUsers.rejected, deleteUser.rejected, addUser.rejected),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      ),
});

export default userSlice.reducer;
