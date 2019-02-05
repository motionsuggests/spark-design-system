/* global it expect */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkMastheadNarrowNav from './SprkMastheadNarrowNav';

Enzyme.configure({ adapter: new Adapter() });

it('shouldnt render anything by default', () => {
  const links = [{ text: 'Item 1' }];
  const wrapper = shallow(<SprkMastheadNarrowNav links={links} />);
  expect(wrapper.children.length).toBe(1);
});