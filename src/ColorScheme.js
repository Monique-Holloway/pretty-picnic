import earth from './images/earth.png';
import neutral from './images/neutral.png';
import pastel from './images/pastel.png';
import vibrant from './images/vibrant.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setColorScheme } from './redux/actions';


function ColorScheme() { 

    const [color, setColor] = useState('');

    const dispatch = useDispatch()
    
    const handleClick =(event) => {
        event.preventDefault()
        dispatch(setColorScheme(event.target.value))
    }

    return (
        <div className="ColorSchemeContainer">
            {console.log(color)}
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={earth} />
                    <Card.Body>
                        <Card.Title>Earth Tones</Card.Title>
                        <Button className="button" variant="primary" value='earth' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={vibrant} />
                    <Card.Body>
                        <Card.Title>Vibrant Colors</Card.Title>
                        <Button className="button" variant="primary" value='vibrant' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={neutral} />
                    <Card.Body>
                        <Card.Title>Neutrals</Card.Title>
                        <Button className="button" variant="primary" value='neutrals' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pastel} />
                    <Card.Body>
                        <Card.Title>Pastels</Card.Title>
                        <Button className="button" variant="primary" value='pastels' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>)
}

export default ColorScheme;