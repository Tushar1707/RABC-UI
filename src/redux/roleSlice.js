import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../services/api";

export const fetchRoles = createAsyncThunk("roles/fetchRoles", async () => {
  const response = await axios.get("/roles");
  return response.data;
});

export const addRole = createAsyncThunk("roles/addRole", async (newRole) => {
  const response = await axios.post("/roles", newRole);
  return response.data;
});

export const updateRole = createAsyncThunk(
  "roles/updateRole",
  async ({ id, updatedRole }) => {
    const response = await axios.put(`/roles/${id}`, updatedRole);
    return response.data;
  }
);

export const deleteRole = createAsyncThunk("roles/deleteRole", async (id) => {
  await axios.delete(`/roles/${id}`);
  return id;
});

const roleSlice = createSlice({
  name: "roles",
  initialState: { roles: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.roles.push(action.payload);
      })
      .addCase(updateRole.fulfilled, (state, action) => {
        const index = state.roles.findIndex((r) => r.id === action.payload.id);
        if (index >= 0) state.roles[index] = action.payload;
      })
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.roles = state.roles.filter((r) => r.id !== action.payload);
      });
  },
});

export default roleSlice.reducer;
