import React, { useState } from 'react';

function AddHeroForm({ addHero }) {
  const initialFormState = {
    name: '',
    abilities: '',
    hasCape: false
  }
  const [formState, setFormState] = useState(initialFormState);
  function handleInput(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }
  function handleCheck(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.checked
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    addHero(formState);
    setFormState(initialFormState);
  }
  return <form onSubmit={handleSubmit}>
    <h2>Add a Hero</h2>
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" onChange={handleInput} value={formState.name} />
    <label htmlFor="abilities">Abilities</label>
    <textarea name="abilities" id="abilities" onChange={handleInput} value={formState.abilities}></textarea>
    <label htmlFor="hasCape">Has cape</label>
    <input type="checkbox" name="hasCape" id="hasCape" onChange={handleCheck} checked={formState.hasCape} />
    <button type="submit">Add Hero</button>
  </form>
}

export default AddHeroForm;
