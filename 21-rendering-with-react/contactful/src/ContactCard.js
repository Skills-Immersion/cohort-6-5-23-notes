import React from 'react';

// lowerCamelCase
// UpperCamelCase

function ContactCard({ name = "Unknown Contact", phoneNumber = '', email = '' }) {
  console.log(name);
  // conditionally, if their email ends with chegg.com, show the thinkful logo for profile picture; otherwise, show a bear
  return <li>
    <div>
      <img src={email.endsWith("chegg.com") ?
        "https://asset.brandfetch.io/id8GqXsHTK/idHKauAYpb.jpeg" :
        "https://placebear.com/100/100"} />
    </div>
    <div>
      <h2>{name}</h2>
      {phoneNumber.includes('5') ? <h4>{phoneNumber}</h4> : ''}

      <h4><a href={`mailto:${email}`} >{email}</a></h4>
    </div>
  </li>
}

export default ContactCard;
