import { render, screen } from '@testing-library/react';
import App from './App';

// the built-in test from create-react-app is always my starting point
test('renders a header with My Contacts', () => {
  // render the component that we're trying to test
  render(<App />);
  // find the elements on the screen that we're looking for
  const headerElement = screen.getByText(/My Contacts/i);
  // make sure they're there
  expect(headerElement).toBeVisible();

  // required to use /regular expression/ when looking for a partial string match
  const headerTwo = screen.getByText(/the header/);
  expect(headerTwo).toBeVisible();
});
