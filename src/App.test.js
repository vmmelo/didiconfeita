import React from 'react'
import { shallow } from 'enzyme'
import App from './App';

describe('App tests', () => {
  it('App should render without errors', () => {
    shallow(<App />)
  })
})
