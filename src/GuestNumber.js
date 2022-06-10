import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGuestNumber } from './redux/actions';



function GuestNumber () {

    const [guests, setGuests] = useState('');

    const dispatch = useDispatch()
    
    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    //   }

    const handleClick =(event) => {
        console.log(event)
        dispatch(setGuestNumber(event))
    }

    return (
        <DropdownButton id="dropdown-basic-button" title="Select # of guests" onSelect={handleClick}>
            {console.log(guests)}
            {/* <select value={this,state.guests} name='guests' handleChange={this.handleChange}></select> */}
            <Dropdown.Item eventKey={2}>2 people, $235</Dropdown.Item>
            <Dropdown.Item eventKey={3}>3 people, $299</Dropdown.Item>
            <Dropdown.Item eventKey={4}>4 people, $329</Dropdown.Item>
            <Dropdown.Item eventKey={5}>5 people, $400</Dropdown.Item>
            <Dropdown.Item eventKey={6}>6 people, $480+ (80/person)</Dropdown.Item>
        </DropdownButton>
    )
}

export default GuestNumber;