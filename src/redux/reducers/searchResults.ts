import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface searchResultsState {
  searchResults: string;
}

const initialState: searchResultsState = {
  searchResults: '',
};

function searchResultsReducer(state = initialState, action: { type: string; payload: string }) {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
}

export default searchResultsReducer;
