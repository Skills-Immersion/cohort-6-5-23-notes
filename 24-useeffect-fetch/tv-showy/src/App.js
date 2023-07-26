import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SearchPage from './search/SearchPage';
import Home from './home/Home';

import ShowDetails from './show/ShowDetails';

function App() {
  const [clicks, setClicks] = useState(0);
  const [hovers, setHovers] = useState(0);
  useEffect(() => {
    document.title = `${Date.now()} is now`
  }, [])

  return (
    <Router>
      <div className="container">
        <h1 onMouseOver={() => setHovers(hovers + 1)} onClick={() => setClicks(clicks + 1)}>TV Showy {hovers} {clicks}</h1>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
          {/* <a href="/">Home</a>
          <a href="/search">Search</a> */}
        </nav>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/shows/:potato">
            <ShowDetails />
          </Route>
          <Route>
            <h4>404, route not found, please return to the home page </h4>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
