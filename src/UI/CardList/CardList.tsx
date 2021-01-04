import React from 'react';
import Card from 'UI/Card/Card';
import { Person } from 'App';
import 'UI/CardList/CardList.styles.css';

interface CardProps {
  people: Person[];
  loading: boolean;
}

const CardList = ({ people, loading }: CardProps) => {
  return (
    <>
      {people.length < 1 && !loading ? (
        <div className="error-message">oops no results</div>
      ) : (
        <ul className="cardList-container">
          {people.map((person) => {
            return (
              <li key={person.id}>
                <Card id={person.id} name={person.name} username={person.username} email={person.email} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default CardList;
