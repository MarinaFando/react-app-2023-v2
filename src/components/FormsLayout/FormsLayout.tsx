import React from 'react';
import UserList from '../UserList/UserList';
import Form from '../Form/Form';
import { User } from '../../redux/reducers/usersList';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export interface FormFields {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  phoneNumber: HTMLInputElement;
  email: HTMLInputElement;
  birthday: HTMLInputElement;
  country: HTMLInputElement;
  gender: HTMLInputElement;
  photo: HTMLInputElement;
  agree: HTMLInputElement;
}

const FormsLayout = () => {
  const usersList = useAppSelector((state) => state.usersList.usersList);
  const dispatch = useAppDispatch();

  const addToUsersList = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    birthday,
    country,
    gender,
    photo,
    agree,
  }: FormFields): void => {
    const user: User = {
      id: Date.now() + Math.floor(Math.random() * 100),
      firstName,
      lastName,
      phoneNumber,
      email,
      birthday,
      country,
      gender,
      photo,
      agree,
    };
    dispatch({ type: 'ADD_USER', payload: user });
    alert(`New user was added to list`);
  };
  return (
    <div className="form-layout">
      <Form addToUsersList={addToUsersList} />
      <UserList usersList={usersList} />
    </div>
  );
};

export default FormsLayout;
