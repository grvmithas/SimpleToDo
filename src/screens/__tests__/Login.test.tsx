import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../Login';

it('renders', () => {
  render(<Login />);
});

it('redirects to list on submit', () => {
  const {getByTestId} = render(<Login />);
  const signInBtn = getByTestId('signInBtn');
  fireEvent.press(signInBtn);
});
