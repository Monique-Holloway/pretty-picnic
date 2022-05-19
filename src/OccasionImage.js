import bdayPicnic from './images/birthday.png';
import bridalPicnic from './images/bridal.png';
import hangoutPicnic from './images/hangout.png';
import romanticPicnic from './images/romantic.png';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function OccasionImage() { 


// const picnicTypes = [{pic: bdayPicnic, picTitle:'celebrating a birthday'}]
// console.log ('picnic type =', picnicTypes)
    return (
        <div className="OccasionImageContainer">
            <div className="OccasionCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bdayPicnic} />
                    <Card.Body>
                        <Card.Title>Birthday Picnic</Card.Title>
                        <Card.Text>
                            Celebrating a birthday?
                        </Card.Text>
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="OccasionCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bridalPicnic} />
                    <Card.Body>
                        <Card.Title>Bridal Picnic</Card.Title>
                        <Card.Text>
                            Celebrating a union?
                        </Card.Text>
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="OccasionCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hangoutPicnic} />
                    <Card.Body>
                        <Card.Title>Hangout Picnic</Card.Title>
                        <Card.Text>
                            Want to just hang with the girls/guys?
                        </Card.Text>
                        <Button variant="primary">Select</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="OccasionCard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={romanticPicnic} />
                    <Card.Body>
                        <Card.Title>Romantic Picnic</Card.Title>
                        <Card.Text>
                            Want a special date night with a special someone?
                        </Card.Text>
                        <Button variant="primary">Select</Button>
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