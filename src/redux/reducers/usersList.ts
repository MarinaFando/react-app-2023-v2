import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthday: string;
  country: string;
  gender: string;
  photo: string;
  agree: boolean;
}

interface usersListState {
  usersList: User[];
}

const initialState: usersListState = {
  usersList: [],
};

function usersListReducer(state = initialState, action: { type: string, payload: User }) {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, usersList: [...state.usersList, action.payload] };
    default:
      return state;
  }
}

export default usersListReducer;
