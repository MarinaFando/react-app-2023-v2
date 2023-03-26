import React from 'react';
import UserList from '../UserList/UserList';
import Form from '../Form';


export interface User {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  birthday: string;
  country: string;
  gender: string;
  photo: Buffer;
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

class FormsLayout extends React.Component {
  state: Users = {
    usersList: [],
  };
  addToUsersList = ({
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
    const oldUsersList = this.state.usersList;
    const user = {
      id: Date.now() + Math.floor(Math.random() * 100),
      firstName: firstName.value,
      lastName: lastName.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      birthday: birthday.value,
      country: country.value,
      gender: gender.value,
      photo: photo.value,
      agree: agree.value,
    };
    this.setState({ usersList: [...oldUsersList, user] });
    alert(`New user was added to list`);
  };
  render() {
    return (
      <div class="form-layout">
        <Form addToUsersList={this.addToUsersList} />
          <UserList usersList={this.state.usersList} />
      </div>
    );
  }
}

export default FormsLayout;
