import { createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from "../api/api";

export const getTvDetails = createAsyncThunk(
  'getTvDetails',
  async (id: string | string[], { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/tv/${id}?language=en-US&${process.env.NEXT_PUBLIC_API_KEY}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getTvDetails : ${err}`);
    }
  }
);
