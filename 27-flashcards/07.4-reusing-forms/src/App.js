import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BearsList from './BearsList';
import BearForm from './BearForm';

function App() {
  const [bears, setBears] = useState([
    {
      name: 'Winnie',
      imageUrl: 'https://akns-images.eonline.com/eol_images/Entire_Site/201477/rs_1024x570-140807100228-1024.Winnie-The-Pooh.jl.080714.jpg?fit=around%7C1024:570&output-quality=90&crop=1024:570;center,top',
      habitat: 'Hundred Acre Wood'
    },
    {
      name: 'Sloth',
      imageUrl: 'https://thumbs.dreamstime.com/b/young-toed-sloth-its-natural-habitat-amazon-river-peru-bradypus-variegatus-found-peruvian-area-endangered-specie-40590664.jpg',
      habitat: 'amazon river'
    }
  ]);
  function addBear(newBear) {
    setBears([
      ...bears,
      newBear
    ]);
  }
  function deleteBear(bearToDelete) {
    let filteredBears = bears.filter(bear => bear !== bearToDelete);
    setBears(filteredBears);
  }
  function editBear(previousBearData, newBearData) {
    let updatedBears = bears.map(b => b === previousBearData ? newBearData : b);
    setBears(updatedBears);
  }
  let emptyBearData = {
    name: '',
    imageUrl: '',
    habitat: ''
  }
  return (
    <div className="container">
      <h1>Bears</h1>
      <BearForm handleSubmit={addBear} initialFormData={emptyBearData} submitButtonText="Submit" headerText="Add a Bear" />
      <BearsList allOfTheBears={bears} editBear={editBear} deleteBear={deleteBear} />
    </div>
  );
}

export default App;
