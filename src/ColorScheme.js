import earth from './images/earth.png';
import neutral from './images/neutral.png';
import pastel from './images/pastel.png';
import vibrant from './images/vibrant.png';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




function ColorScheme() { 

    return (
        <div className="ColorSchemeContainer">
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={earth} />
                    <Card.Body>
                        <Card.Title>Earth Tones</Card.Title>
                        <Button className="button" variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={vibrant} />
                    <Card.Body>
                        <Card.Title>Vibrant Colors</Card.Title>
                        <Button className="button" variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={neutral} />
                    <Card.Body>
                        <Card.Title>Neutrals</Card.Title>
                        <Button className="button" variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pastel} />
                    <Card.Body>
                        <Card.Title>Pastels</Card.Title>
                        <Button className="button" variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>)
}

export default ColorScheme;