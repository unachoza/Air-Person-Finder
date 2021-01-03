import React from 'react';
import 'UI/Card/Card.styles.css';

export interface Person {
  name: string;
  id: number;
  username: string;
  email: string;
}

const Card = ({ username, name, email }: Person) => {
  return (
    <>
      <div className="card">
        <div className="avatar">
          <div>{username}</div>
        </div>
        <div className="description">
          <div className="name">{name}</div>
          <div>{email}</div>
        </div>
      </div>
    </>
  );
};
export default Card;
