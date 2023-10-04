import { createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from "../api/api";
import { ICreditByMovieIdResponse, IMovieDetailsResponse } from "@/types/movieDetailsType";


export const getPopularMovies = createAsyncThunk(
  'getPopularMovies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/movie/popular`);
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
      const response = await Endpoint.get(`/trending/all/day`);
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
      const response = await Endpoint.get(`/trending/all/week`);
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
      const response = await Endpoint.get(`/trending/movie/day`);
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
      const response = await Endpoint.get(`/trending/movie/week`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getTrendingMovieThisWeek : ${err}`);
    }
  }
);


export const fetchMovieDetails = createAsyncThunk(
  'fetchMovieDetails',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get<IMovieDetailsResponse>(`/movie/${id}`,
        {
          params: {
            append_to_response: 'videos,credits,keywords,external_ids,reviews'
          }
        });
      if (response.status === 200) {
        return response.data;
      }
      else { return rejectWithValue('failed to try catch fetchMovieDetails') }
    } catch (err: any) {
      return rejectWithValue(`error catch fetchMovieDetails : ${err}`);
    }
  }
);

export const getCreditByMovieId = createAsyncThunk(
  'getCreditByMovieId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/movie/${id}/credits`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getCreditByMovieId : ${err}`);
    }
  }
);

export const getRecommendationMovieByMovieId = createAsyncThunk(
  'getCreditByMovieId',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await Endpoint.get(`/movie/${id}/recommendations`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (err: any) {
      return rejectWithValue(`error catch getCreditByMovieId : ${err}`);
    }
  }
);