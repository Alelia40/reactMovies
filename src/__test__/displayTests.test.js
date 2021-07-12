import React from 'react';
import { create } from 'react-test-renderer';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers/Index';

import { BrowserRouter as Router } from 'react-router-dom';

import Booking from '../components/booking/Booking';
import Header from '../components/header/Header';
import Notfound from '../components/NotFound/Notfound';
import Details from '../components/details/Details';
import LatestMovies from '../components/LatestMovies/LatestMovies';
import SearchPage from '../components/SearchPage/SearchPage';
import App from '../App';

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('testing Component snapshot', () => {
    test('header component', () => {
        let tree = create(<Header></Header>)
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('booking component', () => {
        let tree = create(
            <Provider store={store}>
                <Router>
                    <Booking></Booking>
                </Router>
            </Provider>
        )
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('details component', () => {
        let tree = create(
            <Provider store={store}>
                <Router>
                    <Details></Details>
                </Router>
            </Provider>
        )
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('latest movies component', () => {
        let tree = create(
            <Provider store={store}>
                <Router>
                    <LatestMovies></LatestMovies>
                </Router>
            </Provider>
        )
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('search page component', () => {
        let tree = create(
            <Provider store={store}>
                <Router>
                    <SearchPage></SearchPage>
                </Router>
            </Provider>
        )
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('not found component', () => {
        let tree = create(<Notfound></Notfound>)
        expect(tree.toJSON()).toMatchSnapshot();
    })

    test('app component', () => {
        let tree = create(
            <Provider store={store}>
                <Router>
                    <App></App>
                </Router>
            </Provider>
        )
        expect(tree.toJSON()).toMatchSnapshot();
    })
})