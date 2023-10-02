import { CreditByMovieIdResponseStatusType, MovieDetailsResponseStatusType, TvDetailsResponseStatusType } from '@/enums/enums';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCreditByMovieId, getMovieDetails, getPopularMovies, getTrendingAllThisWeek, getTrendingAllToday, getTrendingMovieThisWeek, getTrendingMovieToday } from '../action/movieAction';
import { getTvDetails } from '../action/tvAction';
import { ICreditByMovieIdResponse, IMovieDetailsResponse } from '@/types/movieDetailsType';
import { IPopularMovieResponse } from '@/types/popularMovieType';
import { ITrendingResponse } from '@/types/trendingType';
import { ITvDetailsResponse } from '@/types/tvDetailType';


export interface MovieState {
  loading: boolean
  popularMovies: IPopularMovieResponse
  popularMovieResponse: string
  trendingMovieToday: ITrendingResponse
  trendingMovieTodayResponse: string
  trendingMovieThisWeek: ITrendingResponse
  trendingMovieThisWeekResponse: string
  trendingAllThisToday: ITrendingResponse
  trendingAllThisTodayResponse: string
  trendingAllThisWeek: ITrendingResponse
  trendingAllThisWeekResponse: string
  movieDetails: IMovieDetailsResponse,
  movieDetailsResponse: string,
  tvDetails: ITvDetailsResponse,
  tvDetailsResponse: string,
  credit: ICreditByMovieIdResponse
  creditResponse: string
}

const initialState: MovieState = {
  loading: false,
  popularMovies: {} as IPopularMovieResponse,
  popularMovieResponse: '',
  trendingMovieToday: {} as ITrendingResponse,
  trendingMovieTodayResponse: '',
  trendingMovieThisWeek: {} as ITrendingResponse,
  trendingMovieThisWeekResponse: '',
  trendingAllThisToday: {} as ITrendingResponse,
  trendingAllThisTodayResponse: '',
  trendingAllThisWeek: {} as ITrendingResponse,
  trendingAllThisWeekResponse: '',
  movieDetails: {} as IMovieDetailsResponse,
  movieDetailsResponse: '',
  tvDetails: {} as ITvDetailsResponse,
  tvDetailsResponse: TvDetailsResponseStatusType.pending,
  credit: {} as ICreditByMovieIdResponse,
  creditResponse: CreditByMovieIdResponseStatusType.pending
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
    setMovieDetails: (state, action: PayloadAction<IMovieDetailsResponse>) => {
      state.movieDetails = action.payload
      state.movieDetails.release_date = action.payload.release_date.slice(0, 4)
    },
    setTvDetails: (state: MovieState, action) => {
      state.tvDetails = action.payload
    }
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

    builder.addCase(getMovieDetails.pending, (state, action) => {
      return {
        ...state,
        movieDetailsResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      return {
        ...state,
        movieDetailsResponse: action.type,
        loading: false,
        movieDetails: action.payload

      };
    });
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      return {
        ...state,
        movieDetailsResponse: action.type,
        loading: false,
      };
    });

    builder.addCase(getTvDetails.pending, (state: MovieState, action) => {
      return {
        ...state,
        tvDetailsResponse: action.type,
        loading: true,
      };
    });
    builder.addCase(getTvDetails.fulfilled, (state, action: PayloadAction<ITvDetailsResponse>) => {
      return {
        ...state,
        tvDetailsResponse: action.type,
        loading: false,
        tvDetails: action.payload,
      };
    });
    builder.addCase(getTvDetails.rejected, (state, action) => {
      return {
        ...state,
        tvDetailsResponse: action.type,
        loading: false,
      };
    });

    builder.addCase(getCreditByMovieId.pending, (state, action) => {
      return {
        ...state,
        creditResponse: action.type,
        loading: true,
      };
    });

    builder.addCase(getCreditByMovieId.fulfilled, (state, action) => {
      return {
        ...state,
        creditResponse: action.type,
        loading: false,
        credit: action.payload,
      };
    });
    builder.addCase(getCreditByMovieId.rejected, (state, action) => {
      return {
        ...state,
        creditResponse: action.type,
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