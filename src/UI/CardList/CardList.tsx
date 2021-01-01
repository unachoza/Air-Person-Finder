import React from 'react';
import Card from 'UI/Card/Card';
import { Person } from 'App';

const CardList = ({ people }: { people: Array<Person> }) => {
  return (
    <div>
      Card List
      {/* <Card /> */}
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
