import React from 'react';
import Bear from './Bear';

function BearsList({ allOfTheBears, editBear, deleteBear }) {
  return <div>
    {allOfTheBears.map(justOneBear => <Bear data={justOneBear} deleteBear={deleteBear} editBear={editBear} />)}
  </div>
}

export default BearsList;