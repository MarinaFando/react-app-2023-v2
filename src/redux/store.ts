import { configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './reducers/searchText';
import searchResultsReducer from './reducers/searchResults';
import usersListReducer from './reducers/usersList';

const store = configureStore({
  reducer: {
    searchText: searchTextReducer,
    searchResults: searchResultsReducer,
    usersList: usersListReducer,
  },
});

export default store;

export const setupStore = () => store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
