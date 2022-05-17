import './App.css';
import { useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');

  const generateASmile = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setDogImage(data.message)
    })
  }

  return (
    <div className="App">
      <center><button className="button" onClick={generateASmile}>Click here for a smile!</button></center>
      <center>
        <div className="dog">
          {dogImage !== '' ? <img src={dogImage} /> : ''}
        </div>
      </center>
      
    </div>
  );
}

export default App;
