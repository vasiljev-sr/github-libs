import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchRepos } from '@app/api';

export const fetchRepos = createAsyncThunk('api/fetchRepos', async () => {
  const response = await apiFetchRepos();
  return response;
});
