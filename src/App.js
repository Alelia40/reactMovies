import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Details from './components/details/Details';
import Booking from './components/booking/Booking';
import SearchPage from './components/SearchPage/SearchPage';
import LatestMovies from './components/LatestMovies/LatestMovies';
import Notfound from './components/NotFound/Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <LatestMovies></LatestMovies>
          </Route>
          <Route exact path="/search">
            <SearchPage></SearchPage>
          </Route>
          <Route path="/details/:id">
            <Details></Details>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
