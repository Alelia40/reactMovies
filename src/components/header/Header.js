import React from 'react'

import { Navbar, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';

function Header() {
    return (
        <Navbar bg="light" variant="light" expand="lg" className="justify-content-between" style={{paddingLeft: '10px', paddingRight: '10px', marginBottom: '10px'}}>
            <Navbar.Brand href="/">Movie Tickets</Navbar.Brand>
            <Form>
                <InputGroup>
                    <InputGroup.Prepend>
                        <Button variant="outline-success">
                            <FiSearch />
                        </Button>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Search Movies"></FormControl>
                </InputGroup>
            </Form>
        </Navbar>
    )
}

export default Header
