import React, { useEffect } from 'react'

import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetails } from '../../redux/actions/Index';

function Details(props) {

    const {id} = useParams();

    useEffect(() => {
        console.log("opened details for movie - " + id);
        props.fetchDetails(id);
    }, [])

    return (
        <div id="detailsWrapper">
            <Container>
                <Card>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.details,
        searching: state.movieReducer.searching,
        error: state.movieReducer.error,
        loading: state.movieReducer.requesting
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
