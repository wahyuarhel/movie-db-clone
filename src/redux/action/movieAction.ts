import { createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from "../api/api";


export const getPopularMovies = createAsyncThunk(
  'getPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/movie/popular?language=en-US&page=1&${process.env.NEXT_PUBLIC_API_KEY}`);
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
      const response = await Endpoint.get(`/trending/all/day?language=en-US&${process.env.NEXT_PUBLIC_API_KEY}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getTrendingAllToday : ${err}`);
    }
  }
);
export const getTrendingAllThisWeek = createAsyncThunk(
  'getTrendingAllThisWeek',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/trending/all/week?language=en-US&${process.env.NEXT_PUBLIC_API_KEY}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getTrendingAllThisWeek : ${err}`);
    }
  }
);
export const getTrendingMovieToday = createAsyncThunk(
  'getTrendingMovieToday',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/trending/movie/day?language=en-US&${process.env.NEXT_PUBLIC_API_KEY}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getTrendingMovieToday : ${err}`);
    }
  }
);
export const getTrendingMovieThisWeek = createAsyncThunk(
  'getTrendingMovieWeek',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/trending/movie/week?language=en-US&${process.env.NEXT_PUBLIC_API_KEY}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getTrendingMovieThisWeek : ${err}`);
    }
  }
);
export const getMovieDetails = createAsyncThunk(
  'getMovieDetails',
  async (id: string | string[], { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/movie/${id}?language=en-US&${process.env.NEXT_PUBLIC_API_KEY}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getMovieDetails : ${err}`);
    }
  }
);
