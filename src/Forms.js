import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



function PicnicForm () {

    return (
        <div className="FormContainer">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Please type your FIRST and LAST name." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="Best contact number to reach you." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Picnic Location</Form.Label>
                    <Form.Control type="email" placeholder="Name and address of the location." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="email" placeholder="MM/DD/YYYY" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                </Form.Group>

                
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button className="button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>)
}

export default PicnicForm;