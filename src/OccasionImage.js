import bdayPicnic from './images/birthday.png';
import bridalPicnic from './images/bridal.png';
import hangoutPicnic from './images/hangout.png';
import romanticPicnic from './images/romantic.png';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionSetOccasion } from './redux/actions';

function OccasionImage() { 

const [occasion, setOccasion] = useState('');

const dispatch = useDispatch()

const handleClick =(event) => {
    event.preventDefault()
    dispatch(actionSetOccasion(event.target.value))
}
    return (
        <div className="OccasionImageContainer">
            {console.log(occasion)}
            <div className="OccasionCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img className="cardPic" variant="top" src={bdayPicnic} />
                    <Card.Body>
                        <Card.Title>Birthday Picnic</Card.Title>
                        <Card.Text>
                            Celebrating a birthday?
                        </Card.Text>
                        <Button className="button" variant="primary" value='birthday' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="OccasionCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img className="cardPic" variant="top" src={bridalPicnic} />
                    <Card.Body>
                        <Card.Title>Bridal Picnic</Card.Title>
                        <Card.Text>
                            Celebrating a union?
                        </Card.Text>
                        <Button className="button" variant="primary" value='bridal' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="OccasionCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hangoutPicnic} />
                    <Card.Body>
                        <Card.Title>Hangout Picnic</Card.Title>
                        <Card.Text>
                            Hanging with friends?
                        </Card.Text>
                        <Button className="button" variant="primary" value='hangout' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="OccasionCard">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={romanticPicnic} />
                    <Card.Body>
                        <Card.Title>Romantic Picnic</Card.Title>
                        <Card.Text>
                            Special someone?
                        </Card.Text>
                        <Button className="button" variant="primary" value='romantic' onClick={handleClick}>Select</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>)


    // if (props.image == '') {
    //     return (
    //         <div>
    //             Pretty picnic pictures will be here
    //         </div>
    //     )
    // } else {
    //     return (
    //         <img src={props.image} className="occasionImage" alt=""  />
    //     )
    // }
}

export default OccasionImage;