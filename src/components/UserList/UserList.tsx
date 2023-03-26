import React from 'react';
import CardUser from '../CardUser/CardUser';
import { User } from '../FormsLayout/FormsLayout';
import '../../styles/UserList.css';

interface UserListProps {
  usersList: User[];
}

class UserList extends React.Component<UserListProps> {
  render() {
    return (
        <div className="formcardlist__block--form ">
          {this.props.usersList.map((user: User) => {
            return <CardUser key={user.id} user={user} />;
          })}
        </div>
    );
  }
}

export default UserList;
