import rootReducer from "../redux/reducers/Index";

describe("Testing reducers", () => {
    it("Should Return Initial State", () => {
        expect(JSON.stringify(rootReducer(undefined, {}))).toEqual(
            JSON.stringify({
                movieReducer: {
                    data: [],
                    requesting: false,
                    error: null
                }
            })
        )
    })

    it("Testing GET_MOVIES_PENDING", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_MOVIES_PENDING"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })

    it("Testing GET_MOVIES_DONE", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_MOVIES_DONE"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: false,
                data: [],
                error: null
            }
        })
    })

    it("Testing GET_MOVIES_ERR", () => {
        let state = {
            movieReducer: {
                movies: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_MOVIES_ERR"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: false,
                error: null,
                movies: []
            }
        })
    })

    it("Testing GET_SEARCH_PENDING", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_SEARCH_PENDING"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })

    it("Testing GET_SEARCH_DONE", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_SEARCH_DONE"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })

    it("Testing GET_SEARCH_ERR", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_SEARCH_ERR"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })

    it("Testing GET_DETAILS_PENDING", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_DETAILS_PENDING"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })

    it("Testing GET_DETAILS_DONE", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_DETAILS_DONE"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })

    it("Testing GET_DETAILS_ERR", () => {
        let state = {
            movieReducer: {
                data: [],
                requesting: false,
                error: null
            }
        }

        state = rootReducer(state, {
            action: "GET_DETAILS_ERR"
        })

        expect(state).toEqual({
            movieReducer: {
                requesting: true,
                data: [],
                requesting: false,
                error: null
            }
        })
    })
})