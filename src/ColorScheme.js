import earth from './images/earth.jpeg';
import neutral from './images/neutral.jpeg';
import pastel from './images/pastel.jpeg';
import vibrant from './images/vibrant.png';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




function ColorScheme() { 

    return (
        <div className="ColorSchemeContainer">
            <div className="ColorCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={earth} />
                    <Card.Body>
                        <Card.Title>Earth Tones</Card.Title>
                        {/* <Card.Text>
                            Earth Tones
                        </Card.Text> */}
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={vibrant} />
                    <Card.Body>
                        <Card.Title>Vibrant Colors</Card.Title>
                        {/* <Card.Text>
                            Vibrant
                        </Card.Text> */}
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={neutral} />
                    <Card.Body>
                        <Card.Title>Neutrals</Card.Title>
                        {/* <Card.Text>
                            Neutral
                        </Card.Text> */}
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="ColorCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={pastel} />
                    <Card.Body>
                        <Card.Title>Pastels</Card.Title>
                        {/* <Card.Text>
                            Pastel
                        </Card.Text> */}
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>)
}

export default ColorScheme;