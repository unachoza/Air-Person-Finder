import React from 'react';
import Card from 'UI/Card/Card';
import { Person } from 'App';

const CardList = ({ people }: { people: Array<Person> }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Card
            key={person.id}
            id={person.id}
            name={person.name}
            avatar={person.avatar}
            description={person.description}
          />
        );
      })}
    </div>
  );
};
export default CardList;
