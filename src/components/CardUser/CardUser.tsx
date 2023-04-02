import React from 'react';
import '../../styles/CardUser.css';
import { User } from '../FormsLayout/FormsLayout';

interface CardUser{
  user: User;
}

const CardUser = ({user}: CardUser) => {
    return (
      <div className="formcard">
        <div className="formcard__left">
          <img src="img/profile8.jpeg" alt="profile-photo" />
        </div>
        <div className="formcard__right">
          <div className="formcard__right--group">
            <h5>First Name:</h5>
            <div>{user.firstName}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Last Name:</h5>
            <div>{user.lastName}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Phone number:</h5>
            <div>{user.phoneNumber}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Email:</h5>
            <div>{user.email}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Birth date:</h5>
            <div>{user.birthday}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Country:</h5>
            <div>{user.country}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Gender:</h5>
            <div>{user.gender}</div>
          </div>
        </div>
      </div>
    );
}

export default CardUser;
