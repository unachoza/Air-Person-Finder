import React from 'react';
import AirHeader from 'assets/AirHeader.svg';
import CardList from 'UI/CardList';
import SearchBox from 'UI/SearchBox';
import './App.css';

const App = () => {
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
      </main>
    </>
  );
};

export default App;
