import React, { useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { FiChevronRight } from 'react-icons/fi';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../redux/actions/Index';

import './LatestMovies.css';

function LatestMovies(props) {

    useEffect(() => {
        props.fetchMovies();
    }, []);

    return (
        <Container>
            <h3>Latest Movies</h3>
            <hr></hr>
            <div className="movieDisplay">
                <Row style={{ flexWrap: 'nowrap' }}>
                    {props.loading &&
                        <Col>
                            <span>LOADING ...</span>
                        </Col>
                    }
                    {props.data &&
                        props.data.map((movie) => {
                            return (
                                <Col>
                                    <Card className="movieCard" bg="light" text="secondary" border="secondary">
                                        <Card.Img variant="top" src={movie.image} style={{ height: '400px' }} />
                                        <Card.Body>
                                            <Card.Title>{movie.title}</Card.Title>

                                            {Object.entries(movie.prices).map((seat) => {
                                                return (
                                                    <Row>
                                                        <Col>
                                                            <Button variant="outline-success" className="bookNowButton" href={`/booking/${movie.id}?seat=${seat[0]}`}>{seat[0]} seat - {seat[1]}</Button>
                                                        </Col>
                                                    </Row>
                                                )
                                            })
                                            }
                                        </Card.Body>
                                        <Card.Footer>
                                            <Card.Link className="detailsLink" href={`/details/${movie.id}`}>
                                                What's This About? <FiChevronRight />
                                            </Card.Link>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </div>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.movies,
        searching: state.movieReducer.searching,
        error: state.movieReducer.error,
        loading: state.movieReducer.requesting
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LatestMovies);
