import React, { useState } from 'react';

function DiceRoller() {
  const [rollHistory, setRollHistory] = useState([]);
  function rollTheDice() {
    let newRoll = Math.ceil(Math.random() * 6);
    // add that newRoll to the start of our roll history
    setRollHistory([newRoll, ...rollHistory])

    // rollHistory.push(newRoll);
  }
  return <div>
    <div>
      {rollHistory.length && `You rolled a ${rollHistory[0]}!`}
      <button onClick={rollTheDice}>Roll</button>
    </div>
    <div>
      Roll history: {rollHistory.join(', ')}
    </div>

  </div>
}

export default DiceRoller;