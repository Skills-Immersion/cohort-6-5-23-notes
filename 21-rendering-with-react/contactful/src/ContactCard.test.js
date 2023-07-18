import { render, screen } from '@testing-library/react';
import ContactCard from './ContactCard';

test('Contact Card renders basic data correctly', () => {
  // set up my testing data
  const name = 'TestName';
  const phoneNumber = '89756513574965157951';
  const email = 'testemail@test.com';
  // render my component with that data
  render(<ContactCard name={name} phoneNumber={phoneNumber} email={email} />)
  // check that some elements exist & contain the data we expect
  const nameElement = screen.getByText(name);
  expect(nameElement).toBeVisible();
  const phoneNumElement = screen.getByText(phoneNumber);
  expect(phoneNumElement).toBeVisible();
  const emailElement = screen.getByText(email);
  expect(emailElement).toBeVisible();
  expect(emailElement).toHaveAttribute('href', expect.stringContaining(email));
})

test('Contact Card does not render phone numbers without a 5 in them', () => {
  const phoneNumber = '012346789';
  render(<ContactCard phoneNumber={phoneNumber} />);
  const phoneNumElement = screen.queryByText(phoneNumber);
  expect(phoneNumElement).toBeNull();
})

test('Contact Card renders Unknown Contact when no name is given', () => {
  render(<ContactCard />);
  const nameElement = screen.getByText('Unknown Contact');
  expect(nameElement).toBeVisible();
})