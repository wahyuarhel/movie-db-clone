import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieEndpoint from "../api/movieApi";
import { apiKey, movieUrl } from "../api/endpoint";
import axios from "axios";
import { setPopularMovies } from "../slice/movieSlice";

// export const getPopularMovies = createAsyncThunk(
//   'getPopularMovies',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await MovieEndpoint.get(`movie/popular?${apiKey}&language=en-US&page=${1}`);
//       if (response.status === 200) {
//         console.log('getPopularMovies response:', response.data)
//         return response.data;
//       }
//       return response.data;
//     } catch (err: any) {
//       return rejectWithValue(err);
//     }
//   }
// );



export const getPopularMovies = createAsyncThunk(
  'getPopularMovies',
  async () => {
    try {
      const response = await axios.get(`movie/popular?${apiKey}&language=en-US&page=${1}`);
      console.log('getPopularMovies response:', response)
      console.log('getPopularMovies response:', response.data)
      return response.data;

    } catch (err: any) {
      console.log('error', err)
    }
  }
);