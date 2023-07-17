import React from 'react';

// lowerCamelCase
// UpperCamelCase

function ContactCard(props) {
  console.log(props.name);
  return <li>
    <div>
      <img src="https://placebear.com/100/100" />
    </div>
    <div>
      <h2>{props.name}</h2>
      <h4>{props.phoneNumber}</h4>
      <h4><a href={`mailto:${props.email}`} >{props.email}</a></h4>
    </div>
  </li>
}

export default ContactCard;
