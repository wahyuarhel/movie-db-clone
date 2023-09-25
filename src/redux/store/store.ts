import { configureStore } from '@reduxjs/toolkit';
import { movieReducer } from '../slice/movieSlice';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  }
});

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
