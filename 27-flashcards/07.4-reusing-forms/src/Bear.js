import React, { useState } from 'react';
import BearForm from './BearForm';

function Bear({ data, deleteBear, editBear }) {
  const [shouldShowEditForm, setShouldShowEditForm] = useState(false);

  function handleSubmit(updatedBearData) {
    // tell the app.js to update the bear using the new data
    editBear(data, updatedBearData);
    // hide the edit form
    setShouldShowEditForm(false);
  }
  return <div>
    <h3>{data.name}</h3>
    <img src={data.imageUrl} />
    <p>Lives in {data.habitat}</p>
    <button
      className="btn btn-primary"
      onClick={() => setShouldShowEditForm(!shouldShowEditForm)}>
      Edit
    </button>
    <button
      className="btn btn-danger"
      onClick={() => deleteBear(data)}>
      Delete</button>
    {shouldShowEditForm &&
      <BearForm
        initialFormData={data}
        headerText={`Edit ${data.name}`}
        submitButtonText="Save"
        handleSubmit={handleSubmit}
      />}
  </div>
}

export default Bear;