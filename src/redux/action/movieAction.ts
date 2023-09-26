import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieEndpoint from "../api/movieApi";


export const getPopularMovies = createAsyncThunk(
  'getPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await MovieEndpoint.get(`/movie/popular${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${1}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getPopularMovies : ${err}`);
    }
  }
);
