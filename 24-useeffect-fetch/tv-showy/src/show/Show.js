import React from 'react';
import { Link } from 'react-router-dom';

function Show({ show }) {
  return <div className="card mb-3 p-2" style={{ width: '18rem' }}>
    <Link to={`/shows/${show.id}`}><h4>{show.name}</h4></Link>
    {show.image && <img src={show.image.medium} />}
    <p>Premiered on {show.premiered} in {show.language}</p>
  </div>
}

export default Show;