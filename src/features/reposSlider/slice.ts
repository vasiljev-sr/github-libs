import { IApiRepos, IRepo } from '@app/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepos } from '@features/reposSlider/actions';

interface InitialState {
  loading: boolean;
  error: string;
  repos: IRepo[];
  activeRepo: IRepo | null;
}

const initialState: InitialState = {
  loading: false,
  error: '',
  repos: [],
  activeRepo: null,
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setActiveRepo(state, action: PayloadAction<number>) {
      state.activeRepo = state.repos.find((item) => item.id === action.payload) as IRepo;
    },
  },
  extraReducers: {
    [fetchRepos.fulfilled.type]: (state, action: PayloadAction<IApiRepos>) => {
      state.repos = action.payload.items;
      state.loading = false;
      state.error = '';
    },
    [fetchRepos.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchRepos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default reposSlice.reducer;
export const { setActiveRepo } = reposSlice.actions;
