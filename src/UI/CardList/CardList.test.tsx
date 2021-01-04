import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

const filterPeople = [
  {
    id: 1,
    name: 'andy',
    username: 'a',
    email: 'andy@gmail.com',
  },
];
const userRequest = {
  loading: false,
};

it('renders the list without crashing', () => {
  expect(shallow(<CardList people={filterPeople} loading={userRequest.loading} />)).toMatchSnapshot();
});
