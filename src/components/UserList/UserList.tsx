import React from 'react';
import CardUser from '../CardUser/CardUser';
import '../../styles/UserList.css';
import { User } from 'redux/reducers/usersList';

interface UserListProps {
  usersList: User[];
}

const UserList = ({ usersList }: UserListProps) => {
  return (
    <div className="formcardlist__block--form ">
      {usersList.map((user: User) => {
        return <CardUser key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
