import React, { useState } from 'react';
import UserList from '../UserList/UserList';
import Form from '../Form/Form';

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

interface Users {
  usersList: User[];
}

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
  const [usersList, setUsersList] = useState<Users>([]);

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
    setUsersList([...usersList, user]);
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
