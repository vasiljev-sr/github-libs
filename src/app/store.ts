import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reposReducer from '@features/reposSlider/slice';

const rootReducer = combineReducers({ reposReducer });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const store = () => {
  return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
