import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


function GuestNumber () {

    return (
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">2 people, $235</Dropdown.Item>
            <Dropdown.Item href="#/action-2">3 people, $299</Dropdown.Item>
            <Dropdown.Item href="#/action-3">4 people, $329</Dropdown.Item>
            <Dropdown.Item href="#/action-4">5 people, $400</Dropdown.Item>
            <Dropdown.Item href="#/action-5">6 people, $480+ (80/person)</Dropdown.Item>
        </DropdownButton>
    )
}

export default GuestNumber;