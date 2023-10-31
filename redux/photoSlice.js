import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchPhotos} from '../api';

export const fetchPhotosAsync = createAsyncThunk(
  'photos/fetchPhotos',
  async () => {
    const response = await fetchPhotos();
    return response;
  },
);

const photosSlice = createSlice({
  name: 'photos',
  initialState: {data: [], status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPhotosAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchPhotosAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPhotosAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectPhotos = state => state.photos.data;
export const selectPhotosStatus = state => state.photos.status;

export default photosSlice.reducer;
