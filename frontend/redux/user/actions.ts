import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/frontend/redux/api";

export const getUser = createAsyncThunk("user/get", api.get("/api/me"));

export const loginGoogle = createAsyncThunk("user/loginGoogle", api.post("/api/auth/google"));

export const logoutUser = createAsyncThunk("user/logout", api.delete("/api/auth"));

export const loginUser = createAsyncThunk("user/loginEmail", api.post("/api/auth"));

export const resetUserPassword = createAsyncThunk("user/resetPassword", api.put("/api/auth/password?token=:token"));

export const registerUser = createAsyncThunk("user/register", api.post("/api/me"));

export const updateUser = createAsyncThunk("user/update", api.put("/api/me"));

export const deleteUser = createAsyncThunk("user/delete", api.delete("/api/me"));

export const registerAppSumoUser = createAsyncThunk("user/registerAppSumo", api.post("/api/me/appsumo"));
