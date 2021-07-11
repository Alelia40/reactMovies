const URL = "http://localhost:4000"

const latestMovies = () => {
    return fetch(URL+"/movies");
};

const latestMoviesSearch = (query) => {
    return fetch(URL+"/movies?title_like="+query);
};

const movieDetails = (id) => {
    return fetch(URL +"/movies/"+ id);
};

const postTransaction = (data) => {
    return fetch(URL+"/transactions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export {
    latestMovies,
    latestMoviesSearch,
    movieDetails,
    postTransaction
};
