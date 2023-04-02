import React from 'react';
import '../../styles/CardUser.css';
import { User } from '../FormsLayout/FormsLayout';

interface CardUserProps {
  user: User;
}

const CardUser = ({user<CardUserProps>}) => {
    return (
      <div className="formcard">
        <div className="formcard__left">
          <img src="img/profile8.jpeg" alt="profile-photo" />
        </div>
        <div className="formcard__right">
          <div className="formcard__right--group">
            <h5>First Name:</h5>
            <div>{props.user.firstName}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Last Name:</h5>
            <div>{props.user.lastName}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Phone number:</h5>
            <div>{props.user.phoneNumber}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Email:</h5>
            <div>{props.user.email}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Birth date:</h5>
            <div>{props.user.birthday}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Country:</h5>
            <div>{props.user.country}</div>
          </div>
          <div className="formcard__right--group">
            <h5>Gender:</h5>
            <div>{props.user.gender}</div>
          </div>
        </div>
      </div>
    );
}

export default CardUser;
