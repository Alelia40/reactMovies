import React, { useEffect } from 'react'

import { Alert, Card, Container, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetails } from '../../redux/actions/Index';

import { GoStar } from 'react-icons/go';
import './Details.css';
import { FiChevronLeft } from 'react-icons/fi';

function Details(props) {

    const { id } = useParams();

    useEffect(() => {
        console.log("opened details for movie - " + id);
        props.fetchDetails(id);
    }, [])

    return (
        <div id="detailsWrapper">
            <Container>
                <h3>Movie Details</h3>
                <hr></hr>
                {props.loading &&
                    <span>LOADING ...</span>
                }
                {props.data &&
                    <Row>
                        <Col>
                            <Card className="detailsCard" bg="secondary" border="secondary">
                                <Card.Body>
                                    <Card.Img variant="top" src={props.data.image} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="detailsCard" bg="light" text="secondary" border="secondary">
                                <Card.Header>
                                    <Card.Title>{props.data.title} ({props.data.date})</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Starring: {props.data.stars}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Director: {props.data.director}</Card.Subtitle>
                                    <hr></hr>
                                    <Card.Subtitle className="mb-2 text-muted">Duration: {props.data.length}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">Genre: {props.data.genre}</Card.Subtitle>
                                    <hr></hr>
                                    <Card.Subtitle className="mb-2 text-muted">Rating: {props.data.rating}/10 <GoStar /> </Card.Subtitle>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>Summary</Card.Title>
                                    <hr></hr>
                                    <Card.Text className="mb-2 text-muted">{props.data.plot}</Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Title>Tickets</Card.Title>
                                    <hr></hr>
                                    {Object.entries(props.data.prices).map((seat) => {
                                        return (
                                            <Row>
                                                <Col>
                                                    <Button variant="outline-success" className="bookNowButton" href={`/booking/${props.data.id}?seat=${seat[0]}`}>{seat[0]} seat - {seat[1] +" "+ props.data.currency}</Button>
                                                </Col>
                                            </Row>
                                        )
                                    })
                                    }
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Link className="detailsLink" href='/'>
                                        Take Me Back <FiChevronLeft />
                                    </Card.Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(Details)
