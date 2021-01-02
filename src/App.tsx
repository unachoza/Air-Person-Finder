import React, { useState, useEffect } from 'react';
import AirHeader from 'assets/AirHeader.svg';
import CardList from 'UI/CardList/CardList';
import SearchBox from 'UI/SearchBox/SearchBox';
import { MOCK_DATA_URL } from 'constants/constants';
import './App.css';

export interface Person {
  name: string;
  id: number;
  avatar: string;
  description: string;
}
// Person[]

const PersonArray: Person[] = [];

const App = () => {
  const [people, setPeople] = useState(PersonArray);
  console.log({ people });
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(MOCK_DATA_URL);
      let data = (await response.json()) || [];
      setPeople(data);
    };
    getData();
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // @ts-ignore
    setSearchInput(event.target.value);
  };
  // filterPeople.length > 0 &&
  const filterPeople = people.filter((person: Person) => {
    return person?.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <>
      <header className="App">
        <img src={AirHeader} className="app-logo" alt="logo" />
      </header>
      <main>
        <div className="title">The Person Finder</div>
        <div className="">
          If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type
          the name of the person you are looking for below into the search box!
        </div>
        <SearchBox searchChange={onSearchChange} />
        <CardList people={filterPeople} />
      </main>
    </>
  );
};

export default App;
