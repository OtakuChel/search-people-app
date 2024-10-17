import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosUsers = createAsyncThunk(
  "users/axiosUsers",
  async (params) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users?${params}`
      );
      return data;
    } catch (error) {
      // Возвращаем сообщение об ошибке
      return error;
    }
  }
);
