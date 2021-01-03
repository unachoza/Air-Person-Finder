import React from 'react';
import Card from 'UI/Card/Card';
import { Person } from 'App';
import 'UI/CardList/CardList.styles.css';

const CardList = ({ people }: { people: Array<Person> }) => {
  return (
    <ul className="cardList-container">
      {people.map((person) => {
        return (
          <li>
            <Card key={person.id} id={person.id} name={person.name} username={person.username} email={person.email} />
          </li>
        );
      })}
    </ul>
  );
};
export default CardList;
