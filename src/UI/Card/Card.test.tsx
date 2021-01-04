import React from 'react';
import { shallow } from 'enzyme';
import Card from 'UI/Card/Card';

const person = {
  id: 1,
  name: 'andy',
  username: 'a',
  email: 'andy@gmail.com',
};

it('renders without crashing', () => {
  expect(
    shallow(<Card id={person.id} name={person.name} username={person.username} email={person.email} />)
  ).toMatchSnapshot();
});
