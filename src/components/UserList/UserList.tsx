import React from 'react';
import CardUser from '../CardUser/CardUser';
import { User } from '../FormsLayout/FormsLayout';
import '../../styles/UserList.css';

interface UserListProps {
  usersList: User[];
}

const UserList = ({usersList<UserListProps>}) => {

    return (
      <div className="formcardlist__block--form ">
        {usersList.map((user: User) => {
          return <CardUser key={user.id} user={user} />;
        })}
      </div>
    );

}

export default UserList;
