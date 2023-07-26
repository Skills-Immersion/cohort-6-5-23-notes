import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import Episodes from './Episodes';

function ShowDetails() {
  // get info from the API about whichever show is in the URL bar
  const [show, setShow] = useState({});
  const { potato } = useParams();
  const { path, url } = useRouteMatch();
  useEffect(() => {
    let abortController = new AbortController();
    fetch(`https://api.tvmaze.com/shows/${potato}`, { signal: abortController.signal })
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(e => {
        if (e.name !== 'AbortError') throw e;
      })
    return () => abortController.abort();
  }, [potato])
  // render that info to the page
  return <div>
    <h2>{show.name}</h2>
    <nav className="nav nav-tabs">
      <Link to={url} className={`nav-link ${window.location.pathname === url ? 'active' : ''}`}>Show Details</Link>
      <Link to={`${url}/episodes`} className={`nav-link ${window.location.pathname === `${url}/episodes` ? 'active' : ''}`}>Episodes</Link>
    </nav>
    <Switch>
      <Route path={`${path}/episodes`}>
        <Episodes />
      </Route>
      <Route path={path}>
        {show.image && <img src={show.image.medium} />}
        <p>{show.summary && show.summary.replaceAll(/<[^>]*>/g, '')}</p>
        <p>Runtime: {show.runtime}</p>
      </Route>
    </Switch>
  </div>
}

export default ShowDetails;
