import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchMovies, fetchMoviesSearch, fetchDetails, addTransaction } from '../redux/actions/Index';

import jsonData from '../../db.json';

const makeStore = configureStore([thunk]);
const store = makeStore();

describe("Testing actions", () => {
    test("Testing fetchMovies action", () => {
        store.clearActions();
        store.dispatch(fetchMovies()).then(() => {
            const actualActions = store.getActions().map(action => action.type);
            expect(actualActions).toEqual(["GET_MOVIES_PENDING", "GET_MOVIES_DONE"]);
        });
    })

    test("Testing fetchMoviesSearch action", () => {
        store.clearActions();
        store.dispatch(fetchMoviesSearch("Logan")).then(() => {
            const actualActions = store.getActions().map(action => action.type);
            expect(actualActions).toEqual(["GET_SEARCH_PENDING", "GET_SEARCH_DONE"]);
        });
    })

    test("Testing fetchDetails action", () => {
        store.clearActions();
        store.dispatch(fetchDetails(0)).then(() => {
            const actualActions = store.getActions().map(action => action.type);
            expect(actualActions).toEqual(["GET_DETAILS_PENDING", "GET_DETAILS_DONE"]);
        });
    })

    test("Testing addTransaction action", () => {
        let data = {
            email: "x",
            date: "7/11/2021",
            time: "8:00",
            movieId: "1",
            movieTitle: "Thor Ragnarok",
            ticketType: "superior",
            ticketCount: 1,
            amount: "300 THB"
        }
        addTransaction(data).then((response) => {
            expect(response);
        })
    })
})