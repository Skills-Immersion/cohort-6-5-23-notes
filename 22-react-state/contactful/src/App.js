// imports - pulling in whatever we need from other files
import React, { useState } from 'react';
import './App.css';
import ContactsList from './ContactsList';
import Header from './Header';

// App function is the component
// function name is Capitalized (UpperCamelCase)
function App() {
  // return something HTML-ish that will actually be displayed on the page
  // we can't just use standard JS variables - need to use a state variable so React knows to update the page
  //let isLoggedIn = false;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <ContactsList isLoggedIn={isLoggedIn} />
      </main>
    </div>
  );
}

export default App;
