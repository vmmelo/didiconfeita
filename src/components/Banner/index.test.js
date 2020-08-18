import React from 'react';
import { shallow } from 'enzyme';
import Banner from '.';
import components from './components'

it('renders componente Banner sem quebrar', () => {
  const component = shallow(<Banner />);
  expect(component.find('div.carousel-item')).toHaveLength(components.length);
//  expect(instance.state.text).toBe('');
});
