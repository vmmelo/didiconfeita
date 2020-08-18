import React from 'react';
import { render } from '@testing-library/react';
import Banner from '.';
import components from './components';

it('renders componente Banner sem quebrar', () => {
  const banner = render(<Banner />);
  expect(banner.getAllByRole('img').length).toBe(components.length)
  expect(banner.getAllByRole('button').length).toBe(2)
});
