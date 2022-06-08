import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setGuestNumber } from './redux/actions';


function GuestNumber () {

    const [guests, setGuests] = useState('');

    const dispatch = useDispatch()
    
    const handleClick =(event) => {
        event.preventDefault()
        dispatch(setGuestNumber(event.target.value))
    }

    return (
        <DropdownButton id="dropdown-basic-button" title="Select # of guests">
            {console.log(guests)}
            <Dropdown.Item href="#/action-1" value='2' onClick={handleClick}>2 people, $235</Dropdown.Item>
            <Dropdown.Item href="#/action-2" value='3' onClick={handleClick}>3 people, $299</Dropdown.Item>
            <Dropdown.Item href="#/action-3" value='4' onClick={handleClick}>4 people, $329</Dropdown.Item>
            <Dropdown.Item href="#/action-4" value='5' onClick={handleClick}>5 people, $400</Dropdown.Item>
            <Dropdown.Item href="#/action-5" value='6' onClick={handleClick}>6 people, $480+ (80/person)</Dropdown.Item>
        </DropdownButton>
    )
}

export default GuestNumber;