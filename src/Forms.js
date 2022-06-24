import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function PicnicForm () {

    const picnicInfo = useSelector((state) => state)
    console.log('thisIsTheData', picnicInfo)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');

   

    const handleSubmit=(event) => {
        event.preventDefault()
        const data = {
            name: name,
            phone: phone,
            location: location,
            date: date,
            email: email,
            occasion: picnicInfo.occasion,
            color: picnicInfo.color,
            guests: picnicInfo.guests,
        }
        console.log(data)
        fetch('http://localhost:3001/form', 
        {method:'POST', headers:{'Content-Type': 'application/json'}, 
        body: JSON.stringify(data)}).then(res => res.json()).then(data => {
            console.log(data);
        })
    }

    return (
        <div className="FormContainer">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(event)=> setName(event.target.value)} type="text" placeholder="Please type your FIRST and LAST name." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control value={phone} onChange={(event)=> setPhone(event.target.value)}  type="text" placeholder="Best contact number to reach you." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Picnic Location</Form.Label>
                    <Form.Control value={location} onChange={(event)=> setLocation(event.target.value)}  type="text" placeholder="Name and address of the location." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control value={date} onChange={(event)=> setDate(event.target.value)}  type="text" placeholder="MM/DD/YYYY" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(event)=> setEmail(event.target.value)}  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                </Form.Group>

                {/* May have to use onClick={handleClick} */}
                <Button className="button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>)
}

export default PicnicForm;