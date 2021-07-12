import React from 'react'

import { Navbar, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    function search() {
        history.push(`/search?query=`+document.getElementById('search').value);
    }

    return (
        <Navbar bg="light" variant="light" expand="lg" className="justify-content-between" style={{paddingLeft: '10px', paddingRight: '10px', marginBottom: '10px'}}>
            <Navbar.Brand href="/">Movie Tickets</Navbar.Brand>
            <Form onSubmit={(event) => event.preventDefault()}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <Button variant="outline-success" onClick={search}>
                            <FiSearch />
                        </Button>
                    </InputGroup.Prepend>
                    <FormControl id="search" placeholder="Search Movies"></FormControl>
                </InputGroup>
            </Form>
        </Navbar>
    )
}

export default Header
