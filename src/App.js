import { useState } from 'react';
import './index.css';
import * as React from 'react';
// what is this "import ReactDOM" on line 6?
// import ReactDOM from 'react-dom';
import OccasionImage from './OccasionImage.js';
import ColorScheme from './ColorScheme.js';
import GuestNumber from './GuestNumber.js';
import PicnicForm from './Forms.js'

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
      <header className="App-header">
        <center><h1>Pretty Picnic</h1></center>
      </header>

      {/* occasion cards */}
      <center>
        <div className="ContainerOfImages">
          <div>
            <h2 className="occasionHeader">Occasion?</h2>
          </div>
          <div className="ImageContainer">
            <OccasionImage />
          </div>
        </div>
      </center>

      {/* color scheme cards */}
      <center>
        <div>
          <h2 className="colorSchemeHeader">Desired color scheme?</h2>
        </div>
        <div className="SchemeContainer">
          <ColorScheme />
        </div>
      </center>

      {/* # of guests dropdown */}
      <div className="guestNumber">
        <center>
          <h2 className="guestNumberHeader">Number of guests?</h2>
          <GuestNumber />
        </center>
      </div>

      {/* contact info form */}
      <div>
        <p className="formHeader">Please fill out ALL areas of the below form.</p>
      </div>
      <PicnicForm />

      {/* click for a smile => start of dog API */}
      <center>
        <button className="button" onClick={generateASmile}>Click here for a smile!</button>
      </center>
      <center>
        <div className="dog">{dogImage !== '' ? <img src={dogImage} alt="cute dog" /> : ''}</div>
      </center>

    </div>

  );
}


export default App;
