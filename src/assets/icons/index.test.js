import React from 'react'
import ReactDOM from 'react-dom';
import { Instagram, Whatsapp } from '.'

it('should render Instagram svg', () => {
  expect(typeof Instagram).toBe('function')
  const div = document.createElement('div');
  ReactDOM.render(<Instagram />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render whatsapp svg', () => {
  expect(typeof Whatsapp).toBe('function')
  const div = document.createElement('div');
  ReactDOM.render(<Whatsapp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
