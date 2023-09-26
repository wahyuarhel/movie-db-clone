import { PopularMovieResponseType } from '@/types/popularMovieType';
import { createSlice } from '@reduxjs/toolkit';
import { getPopularMovies } from '../action/movieAction';


type MovieState = {
  loading: boolean
  popularMovies: PopularMovieResponseType,
  popularMovieResponse: string
}

const initialState: MovieState = {
  loading: false,
  popularMovies: {} as PopularMovieResponseType,
  popularMovieResponse: 'idle'
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
    builder.addCase(getPopularMovies.pending, (state, action) => {
      return {
        ...state,
        popularMovieResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        popularMovieResponse: action.type,
        popularMovies: action.payload,
      };
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      return {
        ...state,
        popularMovieResponse: action.type,
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