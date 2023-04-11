import React from 'react';
import '../../styles/CardUser.css';
import { User } from '../FormsLayout/FormsLayout';

const CardUser = ({ user }: User) => {
  const { firstName, lastName, phoneNumber, email, birthday, country, gender, photo } = user;

  return (
    <div className="formcard">
      <div className="formcard__left">
        <img src={photo} alt="profile-photo" />
      </div>
      <div className="formcard__right">
        <div className="formcard__right--group">
          <h5>First Name:</h5>
          <div>{firstName}</div>
        </div>
        <div className="formcard__right--group">
          <h5>Last Name:</h5>
          <div>{lastName}</div>
        </div>
        <div className="formcard__right--group">
          <h5>Phone number:</h5>
          <div>{phoneNumber}</div>
        </div>
        <div className="formcard__right--group">
          <h5>Email:</h5>
          <div>{email}</div>
        </div>
        <div className="formcard__right--group">
          <h5>Birth date:</h5>
          <div>{birthday}</div>
        </div>
        <div className="formcard__right--group">
          <h5>Country:</h5>
          <div>{country}</div>
        </div>
        <div className="formcard__right--group">
          <h5>Gender:</h5>
          <div>{gender}</div>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
