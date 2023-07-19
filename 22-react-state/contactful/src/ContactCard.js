import React from 'react';

// lowerCamelCase
// UpperCamelCase

function ContactCard({ name = "Unknown Contact", phoneNumber = '', email = '', starred, isLoggedIn, deleteContact, setStarred }) {
  console.log(name);
  // conditionally, if their email ends with chegg.com, show the thinkful logo for profile picture; otherwise, show a bear
  return <li>
    <div>
      <img onClick={() => deleteContact(phoneNumber)} src={email.endsWith("chegg.com") ?
        "https://asset.brandfetch.io/id8GqXsHTK/idHKauAYpb.jpeg" :
        "https://placebear.com/100/100"} />
    </div>
    <div>
      <h2>
        {starred && <img src="https://cdn-icons-png.flaticon.com/512/118/118669.png" />}
        {name}
      </h2>
      {
        isLoggedIn && <>
          {phoneNumber.includes('5') ? <h4>{phoneNumber}</h4> : ''}

          <h4><a href={`mailto:${email}`} >{email}</a></h4>
          <button onClick={() => setStarred(phoneNumber)} >Star this contact</button>
        </>
      }
    </div>
  </li>
}

export default ContactCard;
