import React, { useEffect, useState } from 'react'
import { Alert, Card, Container, Button, Row, Col, Form, InputGroup } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetails } from '../../redux/actions/Index';

import { useLocation, useParams } from 'react-router-dom';

import { FiChevronLeft, FiBookOpen, FiMinus, FiPlus } from 'react-icons/fi';

import './Booking.css';

function Booking(props) {

    const { id } = useParams();
    let selectedTicket = new URLSearchParams(useLocation().search).get("seat");

    const [numTickets, setNumTickets] = useState(1);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        console.log(id + "," + selectedTicket);
        props.fetchDetails(id);
    }, [])

    return (
        <div id="bookingWrapper">
            <Container>
                {props.loading &&
                    <span>LOADING ...</span>
                }
                {props.data &&
                    <Card className="bookingCard" bg="light" text="secondary" border="secondary">
                        <Card.Header>Purchasing Tickets</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>Movie: {props.data.title}</Card.Title>
                                </Col>
                                <Col>
                                    <Card.Title>Show Date: {new Date().toLocaleDateString('en-US')}</Card.Title>
                                </Col>
                            </Row>
                            <hr></hr>
                            <Card.Title>Select Options</Card.Title>
                            <hr></hr>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Number Of Tickets ({selectedTicket.toUpperCase()})</Form.Label>
                                    <Row>
                                        <Col>
                                            <Button variant="outline-secondary" onClick={() => setNumTickets(numTickets - 1)} disabled={numTickets <= 1}><FiMinus /></Button>
                                            <span style={{ marginLeft: '10px', marginRight: '10px' }}>{numTickets}</span>
                                            <Button variant="outline-secondary" onClick={() => setNumTickets(numTickets + 1)} disabled={numTickets >= 10}><FiPlus /></Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Showtime</Form.Label>
                                    <Form.Control as="select" multiple>
                                        <option>7:00</option>
                                        <option>7:30</option>
                                        <option>8:00</option>
                                        <option>8:30</option>
                                        <option>9:00</option>
                                        <option>9:30</option>
                                        <option>10:00</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>* Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                            </Form>
                            <hr></hr>
                            <Card.Title>Booking Cost: {eval(props.data.prices[selectedTicket] * numTickets) + " " + props.data.currency}</Card.Title>
                            <Button variant="outline-success">Book Now <FiBookOpen /></Button>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link className="detailsLink"><FiChevronLeft /> Cancel</Card.Link>
                        </Card.Footer>
                    </Card>
                }
                {props.error &&
                    <Alert variant="danger">
                        {props.error}
                    </Alert>
                }
            </Container>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.detail,
        searching: state.movieReducer.searching,
        error: state.movieReducer.error,
        loading: state.movieReducer.requesting
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking)