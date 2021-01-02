import React from 'react';
import 'UI/Card/Card.styles.css';

export interface Person {
  name: string;
  id: number;
  avatar: string;
  description: string;
}

const Card = ({ avatar, description, name }: Person) => {
  return (
    <>
      <div className="card">
        <div className="avatar">
          <img src={avatar} alt="person avatar" />
        </div>
        <div className="description">
          <div className="name">{name}</div>
          <div>{description}</div>
        </div>
      </div>
    </>
  );
};
export default Card;
