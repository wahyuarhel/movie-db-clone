import { createSlice } from '@reduxjs/toolkit';
import { getPopularMovies } from '../action/movieAction';
import { PopularMovieResponseInitial, PopularMovieResponseType } from '@/types/popularMovieType';
import { PopularMoviesResponseEnum } from '@/app/types';


type MovieState = {
  loading: boolean
  popularMovies: PopularMovieResponseType,
  popularMovieResponse: PopularMoviesResponseEnum
}

const initialState: MovieState = {
  loading: false,
  popularMovies: PopularMovieResponseInitial,
  popularMovieResponse: PopularMoviesResponseEnum.pending
}

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    resetState: () => { },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
  extraReducers: builder => {
    console.log('extraReducers')
    builder.addCase(getPopularMovies.pending, (state, action) => {
      console.log('getPopularMovies.pending')
      return {
        ...state,
        popularMovieResponse: PopularMoviesResponseEnum.pending,
        loading: true,
      };
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      console.log('getPopularMovies.fulfilled')
      return {
        ...state,
        loading: false,
        popularMovieResponse: PopularMoviesResponseEnum.success,
        popularMovies: action.payload,
      };
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      console.log('getPopularMovies.rejected:', action.payload)
      return {
        ...state,
        popularMovieResponse: PopularMoviesResponseEnum.failed,
        loading: false,
      };
    });
  }
})


export const {
  resetState,
  setPopularMovies,
} = MovieSlice.actions

export const movieReducer = MovieSlice.reducer