import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/details/Details';
import Booking from './components/booking/Booking';
import SearchPage from './components/SearchPage/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Main></Main>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
