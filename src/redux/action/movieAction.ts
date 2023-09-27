import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieEndpoint from "../api/movieApi";


export const getPopularMovies = createAsyncThunk(
  'getPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await MovieEndpoint.get(`/movie/popular${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getPopularMovies : ${err}`);
    }
  }
);

export const getTrendingAllToday = createAsyncThunk(
  'getTrendingAllToday',
  async (_, { rejectWithValue }) => {
    try {
      const response = await MovieEndpoint.get(`/trending/all/day${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getPopularMovies : ${err}`);
    }
  }
);
export const getTrendingAllThisWeek = createAsyncThunk(
  'getTrendingAllThisWeek',
  async (_, { rejectWithValue }) => {
    try {
      const response = await MovieEndpoint.get(`/trending/all/week${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getPopularMovies : ${err}`);
    }
  }
);
export const getTrendingMovieToday = createAsyncThunk(
  'getTrendingMovieToday',
  async (_, { rejectWithValue }) => {
    try {
      const response = await MovieEndpoint.get(`/trending/movie/day${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getPopularMovies : ${err}`);
    }
  }
);
export const getTrendingMovieThisWeek = createAsyncThunk(
  'getTrendingMovieWeek',
  async (_, { rejectWithValue }) => {
    try {
      const response = await MovieEndpoint.get(`/trending/movie/week${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getPopularMovies : ${err}`);
    }
  }
);
