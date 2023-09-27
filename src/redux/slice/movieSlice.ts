import { PopularMovieResponseType } from '@/types/popularMovieType';
import { createSlice } from '@reduxjs/toolkit';
import { getPopularMovies, getTrendingAllThisWeek, getTrendingAllToday, getTrendingMovieThisWeek, getTrendingMovieToday } from '../action/movieAction';
import { TrendingResponseType } from '@/types/trendingType';


type MovieState = {
  loading: boolean
  popularMovies: PopularMovieResponseType
  popularMovieResponse: string
  trendingMovieToday: TrendingResponseType
  trendingMovieTodayResponse: string
  trendingMovieThisWeek: TrendingResponseType
  trendingMovieThisWeekResponse: string
  trendingAllThisToday: TrendingResponseType
  trendingAllThisTodayResponse: string
  trendingAllThisWeek: TrendingResponseType
  trendingAllThisWeekResponse: string
}

const initialState: MovieState = {
  loading: false,
  popularMovies: {} as PopularMovieResponseType,
  popularMovieResponse: '',
  trendingMovieToday: {} as TrendingResponseType,
  trendingMovieTodayResponse: '',
  trendingMovieThisWeek: {} as TrendingResponseType,
  trendingMovieThisWeekResponse: '',
  trendingAllThisToday: {} as TrendingResponseType,
  trendingAllThisTodayResponse: '',
  trendingAllThisWeek: {} as TrendingResponseType,
  trendingAllThisWeekResponse: '',
}

const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    resetState: () => { },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    setTrendingMovieToday: (state, action) => {
      state.trendingMovieToday = action.payload
    },
    setTrendingMovieThisWeek: (state, action) => {
      state.trendingMovieThisWeek = action.payload
    },
    setTrendingAllThisToday: (state, action) => {
      state.trendingAllThisToday = action.payload
    },
    setTrendingAllThisWeek: (state, action) => {
      state.trendingAllThisWeek = action.payload
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
    builder.addCase(getTrendingMovieToday.pending, (state, action) => {
      return {
        ...state,
        trendingMovieTodayResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getTrendingMovieToday.fulfilled, (state, action) => {
      return {
        ...state,
        trendingMovieTodayResponse: action.type,
        loading: false,
        trendingMovieToday: action.payload,
      };
    });
    builder.addCase(getTrendingMovieToday.rejected, (state, action) => {
      return {
        ...state,
        trendingMovieTodayResponse: action.type,
        loading: false,
      };
    });
    builder.addCase(getTrendingMovieThisWeek.pending, (state, action) => {
      return {
        ...state,
        trendingMovieThisWeekResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getTrendingMovieThisWeek.fulfilled, (state, action) => {
      return {
        ...state,
        trendingMovieThisWeekResponse: action.type,
        loading: false,
        trendingMovieThisWeek: action.payload,
      };
    });
    builder.addCase(getTrendingMovieThisWeek.rejected, (state, action) => {
      return {
        ...state,
        trendingMovieThisWeekResponse: action.type,
        loading: false,
      };
    });
    builder.addCase(getTrendingAllToday.pending, (state, action) => {
      return {
        ...state,
        trendingAllThisTodayResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getTrendingAllToday.fulfilled, (state, action) => {
      return {
        ...state,
        trendingAllThisTodayResponse: action.type,
        loading: false,
        trendingAllThisToday: action.payload,
      };
    });
    builder.addCase(getTrendingAllToday.rejected, (state, action) => {
      return {
        ...state,
        trendingAllThisTodayResponse: action.type,
        loading: false,
      };
    });
    builder.addCase(getTrendingAllThisWeek.pending, (state, action) => {
      return {
        ...state,
        trendingAllThisWeekResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getTrendingAllThisWeek.fulfilled, (state, action) => {
      return {
        ...state,
        trendingAllThisWeekResponse: action.type,
        loading: false,
        trendingAllThisWeek: action.payload,
      };
    });
    builder.addCase(getTrendingAllThisWeek.rejected, (state, action) => {
      return {
        ...state,
        trendingAllThisWeekResponse: action.type,
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