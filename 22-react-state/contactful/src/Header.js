// import
import React from 'react';

// define the function that is the component
function Header({ isLoggedIn, setIsLoggedIn }) {

  function logTheThing() {
    console.log('the thing happened');
  }
  function clickHandler() {
    console.log('clicked the button');
    // isLoggedIn = true;
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <header className="App-header">
      <h1 className="contacts-header" >
        My Contacts
        {isLoggedIn ? 'You are logged in!' : ''}
        <button onClick={clickHandler}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
      </h1>
      <h2 onMouseEnter={logTheThing}>This is also part of the header</h2>
    </header>
  )
}

// export the function/component that we wrote
export default Header;
