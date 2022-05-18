import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movieSlice';
import userReducer from '../features/authSlice'
import movieDataReducer from '../features/movieDataSlice';
import movieRouteReducer from '../features/movieRouteSlice'
export const store = configureStore({
  reducer: {
     movie:movieReducer,
     user:userReducer,
     movieData:movieDataReducer,
     movieRoute:movieRouteReducer
  },
});
