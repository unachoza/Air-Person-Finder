import React, { useState, useEffect } from 'react';
import AirHeader from 'assets/AirHeader.svg';
import CardList from 'UI/CardList/CardList';
import SearchBox from 'UI/SearchBox/SearchBox';
import { MOCK_DATA_URL } from 'constants/constants';
import './App.css';

export interface Person {
  name: string;
  id: number;
  email: string;
  avatar: string;
  description: string;
}

// interface IAppProps {}

// interface IAppState {
//   robots: Array<IRobot>;
//   searchfield: string;
// }

const App = () => {
  const [people, setPeople] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(MOCK_DATA_URL);
      let data = await response.json();
      setPeople(data);
    };
    getData();
  }, []);
  console.log(people);
  return (
    <>
      <header className="App">
        <img src={AirHeader} className="app-logo" alt="logo" />
      </header>
      <main>
        <div className="title">The Person Finder</div>
        <div className="description">
          If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type
          the name of the person you are looking for below into the search box!
        </div>
        <CardList people={people} />
      </main>
    </>
  );
};

export default App;
