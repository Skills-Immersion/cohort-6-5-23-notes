import React from 'react';
import ContactCard from './ContactCard';
import './ContactsList.css';

function ContactsList() {
  let contacts = [
    {
      name: "Michelle",
      email: "mferreirae@chegg.com",
      phoneNumber: "555 555 5555"
    }, {
      name: "Alex",
      email: "alex@alex.com",
      phoneNumber: "(432) 324-2342"
    }, {
      phoneNumber: "(325) 989-3982"
    }
  ]
  let h4s = contacts.map(c => <h4 key={c.phoneNumber}>Phone number: {c.phoneNumber}</h4>)
  // let contactCards = contacts.map(c => <ContactCard
  //   key={c.phoneNumber}
  //   name={c.name}
  //   email={c.email}
  //   phoneNumber={c.phoneNumber}
  // />)
  return <ul className="contactsList">
    {h4s}
    {contacts.map(c => <ContactCard
      key={c.phoneNumber}
      name={c.name}
      email={c.email}
      phoneNumber={c.phoneNumber}
    />)}
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(c => <tr key={c.phoneNumber}>
          <td>{c.name}</td>
          <td>{c.phoneNumber}</td>
          <td>{c.email}</td>
          <td><img src={c.email && c.email.endsWith("chegg.com") ?
            "https://asset.brandfetch.io/id8GqXsHTK/idHKauAYpb.jpeg" :
            "https://placebear.com/100/100"} /></td>
        </tr>)}
      </tbody>
    </table>
  </ul>
}

export default ContactsList;