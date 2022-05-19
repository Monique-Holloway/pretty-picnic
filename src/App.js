import { useState } from 'react';
import './index.css';
import * as React from 'react';
// what is this "import ReactDOM" on line 6?
// import ReactDOM from 'react-dom';
import OccasionImage from './OccasionImage.js';
import ColorScheme from './ColorScheme.js';
import GuestNumber from './GuestNumber.js'

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

      {/* Start of sign-up form */}
      <div className='container'>
      </div>
      <center>
        <div>
          <h2 className="occasionTopic">Occasion?</h2>
        </div>
        <div className="ImageContainer">
          <OccasionImage />
        </div>
        <div>
          <h2 className="occasionTopic">Desired color scheme?</h2>
        </div>
        <div className="SchemeContainer">
          <ColorScheme />
        </div>
      </center>
      <div>
        <GuestNumber />
      </div>
      {/* put at the bottom of page...after pics and form */}
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
