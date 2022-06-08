// import { useState } from 'react';
import './index.css';
import * as React from 'react';
// what is this "import ReactDOM" on line 6?
// import ReactDOM from 'react-dom';
import OccasionImage from './OccasionImage.js';
import ColorScheme from './ColorScheme.js';
import GuestNumber from './GuestNumber.js';
import PicnicForm from './Forms.js'
import geenius from './images/geenius.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function App() {
  // const [dogImage, setDogImage] = useState('');

  // const generateASmile = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setDogImage(data.message)
  //     })
  // }

  return (
    <div className="App">
      <center>
          <img className="App-header" alt='' src={geenius} />
      </center>

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
        <div className="colorContainer">
          <div>
            <h2 className="colorSchemeHeader">Desired color scheme?</h2>
          </div>
          <div className="SchemeContainer">
            <ColorScheme />
          </div>
        </div>
      </center>

      {/* # of guests dropdown */}
      <center>
        <div className="guestNumber">
          <h2 className="guestNumberHeader">Number of guests?</h2>
          <GuestNumber />
        </div>
      </center>

      {/* contact info form */}
      <Container>
        <Row className="justify-content-md-center">
        <div className="form">
          <div>
            <p className="formHeader">Please fill out ALL areas of the below form.</p>
          </div>
          <PicnicForm />
        </div>
        </Row>
      </Container>

      {/* click for a smile => start of dog API */}
      {/* <center>
        <button className="button" onClick={generateASmile}>Click here for a smile!</button>
      </center>
      <center>
        <div className="dog">{dogImage !== '' ? <img src={dogImage} alt="cute dog" /> : ''}</div>
      </center> */}

    </div>

  );
}


export default App;
