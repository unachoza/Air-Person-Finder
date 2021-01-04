import React from 'react';
import 'UI/SearchBox/SearchBox.styles.css';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <>
      <label>
        {' '}
        Search
        <input type="text" className="input-box" placeholder="Type a name..." onChange={searchChange} />
      </label>
    </>
  );
};
export default SearchBox;
