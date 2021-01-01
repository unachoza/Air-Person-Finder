import React from 'react';
import Card from 'UI/Card/Card';
import { Person } from 'App';

const CardList = ({ people }: { people: Array<Person> }) => {
  console.log('at card list', people);
  return (
    <div>
      Card List
      {people.map((person, i) => {
        return (
          <Card
            key={i}
            id={people[i].id}
            name={people[i].name}
            email={people[i].email}
            avatar={people[i].avatar}
            description={people[i].description}
          />
        );
      })}
    </div>
  );
};
export default CardList;

// import { IRobot } from '../containers/App'

// const CardList = ({ robots }: {robots: Array<IRobot>}) => {
//   return (
//     <div>
//       {
//         robots.map((user, i) => {
//           return (
//             <Card
//               key={i}
//               id={robots[i].id}
//               name={robots[i].name}
//               email={robots[i].email}
//               />
//           );
//         })
//       }
//     </div>
//   );
// }
