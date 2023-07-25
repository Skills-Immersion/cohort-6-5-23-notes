import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ShowDetails() {
  // get info from the API about whichever show is in the URL bar
  const [show, setShow] = useState({});
  const { potato } = useParams();
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${potato}`)
      .then(response => response.json())
      .then(data => setShow(data))
  }, [])
  // render that info to the page
  return <div>
    <h2>{show.name}</h2>
    {show.image && <img src={show.image.medium} />}
    <p>{show.summary && show.summary.replaceAll(/<[^>]*>/g, '')}</p>
    <p>Runtime: {show.runtime}</p>
  </div>
}

export default ShowDetails;
