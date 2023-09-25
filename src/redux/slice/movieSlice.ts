import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPopularMovies } from '../action/movieAction';
import { PopularMovieResponseType } from '@/types/popularMovieType';


type MovieState = {
  loading: boolean
  popularMovies: PopularMovieResponseType | {}
}

const initialState: MovieState = {
  loading: false,
  popularMovies: {} as PopularMovieResponseType
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
      console.log('getPopularMovies.pending', action.payload)
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getPopularMovies.fulfilled, (state, action) => {
      console.log('getPopularMovies:', action.payload)
      return {
        ...state,
        loading: false,
        popularMovies: action.payload,
      };
    });
    builder.addCase(getPopularMovies.rejected, (state, action) => {
      console.log('getPopularMovies.rejected:', action.payload)
      return {
        ...state,
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