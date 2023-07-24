import React from 'react';

function Show({ show }) {
  return <div className="card" style={{ width: '18rem' }}>
    <h4>{show.name}</h4>
    {show.image && <img src={show.image.medium} />}
    <p>Premiered on {show.premiered} in {show.language}</p>
  </div>
}

export default Show;