import React, { useState } from 'react';

function ContactsForm() {
  // variable to hold whatever data the user has typed in so far
  const [phoneNumber, setPhoneNumber] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    console.log('the form submitted');
    console.log(phoneNumber);
  }
  function handleTyping(event) {
    // grab whatever the user has typed & use it to update the phoneNumber variable
    setPhoneNumber(event.target.value);
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleTyping} value={phoneNumber} />
      {/* <button type="submit" className="btn btn-primary">Add Contact</button> */}
      <input type="submit" value="Add Contact" className="btn btn-primary" />
    </form>
  </div>
}

export default ContactsForm;