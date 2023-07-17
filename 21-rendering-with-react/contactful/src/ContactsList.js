import React from 'react';
import ContactCard from './ContactCard';

function ContactsList() {
  return <ul>
    <ContactCard name="Michelle" email="mferreirae@thinkful.com" phoneNumber="(555) 555-5555" />
    <ContactCard name="Alex" email="alex@alex.com" phoneNumber="(432) 324-2341" />
    <ContactCard phoneNumber="(234) 1234-3445" />
  </ul>
}

export default ContactsList;