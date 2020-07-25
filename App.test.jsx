import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders correctly', async () => {
  const { getByText } = render(<App />);
  const appTextNode = getByText(/hello/i);
  expect(appTextNode).not.toBe(null);
});
