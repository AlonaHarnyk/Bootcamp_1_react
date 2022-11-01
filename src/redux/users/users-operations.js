import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios("http://localhost:8080/users");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/users/${id}`, {
        headers: {
          authorization: "admin",
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addUser = createAsyncThunk(
  "users/addUsers",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("http://localhost:8080/users", user);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
    "users/updateUsers",
  async (user, { rejectWithValue }) => {
    try {
      await axios.put(`http://localhost:8080/users/${user.id}`, user);
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)