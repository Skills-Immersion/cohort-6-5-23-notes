import React, { useState } from 'react';

function ContactsForm({ addContact }) {
  const initialFormState = {
    phoneNumber: '',
    name: '',
    email: ''
  }
  // variable to hold whatever data the user has typed in so far
  const [formState, setFormState] = useState(initialFormState);
  function handleSubmit(event) {
    event.preventDefault();
    console.log('the form submitted');
    console.log(formState);
    addContact(formState);
    setFormState(initialFormState);
  }
  function handleTyping(event) {
    // grab whatever the user has typed & use it to update the formState variable
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" onChange={handleTyping} value={formState.name} />
      <label htmlFor="phoneNumber">Phone number</label>
      <input type="text" name="phoneNumber" id="phoneNumber" onChange={handleTyping} value={formState.phoneNumber} />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" onChange={handleTyping} value={formState.email} />
      {/* <button type="submit" className="btn btn-primary">Add Contact</button> */}
      <label htmlFor="referral">
        How did you hear about us?
        <select
          id="referral"
          name="referral"
        >
          <option value="">-- Select an Option --</option>
          <option value="twitter">Twitter</option>
          <option value="wom">Word of Mouth</option>
          <option value="youtube">YouTube</option>
        </select>
      </label>
      <input type="submit" value="Add Contact" className="btn btn-primary" />
    </form>
  </div>
}

export default ContactsForm;