import {configureStore} from '@reduxjs/toolkit';
import photosSlice from './photoSlice';

const store = configureStore({
  reducer: {
    photos: photosSlice,
  },
});

export default store;
