import React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  console.log({ searchChange });
  return (
    <>
      <div>SearchBox</div>
      <input type="text" className="input-box" placeholder="Type a name..." onChange={searchChange} />
    </>
  );
};
export default SearchBox;
