import React from 'react';
import 'UI/Card/Card.styles.css';

export interface Person {
  name: string;
  id: number;
  email: string;
  avatar: string;
  description: string;
}

const Card = ({ avatar, description, name, email, id }: Person) => {
  return (
    <>
      <div className="card">card single</div>
      <div className="avatar">img{avatar}</div>
      <div className="name">name{name}</div>
      <div className="name">description{description}</div>
      <div className="name">email{email}</div>
    </>
  );
};
export default Card;
