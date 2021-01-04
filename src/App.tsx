import React, { useState, useEffect } from 'react';
import AirHeader from 'assets/AirHeader.svg';
import CardList from 'UI/CardList/CardList';
import SearchBox from 'UI/SearchBox/SearchBox';
import { ROBOTS_URL, SUB_TITLE } from 'constants/constants';
import Loading from 'UI/Loading/Loading';
import './App.css';

export interface Person {
  name: string;
  id: number;
  username: string;
  email: string;
}

interface UserRequest {
  error: boolean;
  loading: boolean;
}

const App = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [userRequest, setUserRequest] = useState<UserRequest>({ loading: false, error: false });

  useEffect(() => {
    const getData = async () => {
      try {
        setUserRequest({ loading: true, error: false });
        let response = await fetch(ROBOTS_URL);
        let data = (await response.json()) || [];
        setPeople(data);
        setUserRequest({ loading: false, error: false });
      } catch {
        setUserRequest({ loading: false, error: true });
      }
    };
    getData();
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(event.target.value);
  };
  const filterPeople = people.filter((person: Person) => {
    return person?.name.toLowerCase().includes(searchInput.toLowerCase());
  });
  return (
    <>
      <header className=" fixed-top">
        <img src={AirHeader} id="app-logo" alt="logo" />
      </header>
      <main>
        <div className="title">The Person Finder</div>
        <div className="sub-title">{SUB_TITLE}</div>
        <SearchBox searchChange={onSearchChange} />
        {userRequest.loading && <Loading />}
        {userRequest.error ? (
          <div className="error-message">Oops there was an error! Please refresh! </div>
        ) : (
          // people={filterPeople} loading={userRequest.loading}
          <CardList people={filterPeople} loading={userRequest.loading} />
        )}
      </main>
    </>
  );
};

export default App;
