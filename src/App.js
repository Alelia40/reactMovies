import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Details from './components/details/Details';
import Booking from './components/booking/Booking';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/booking">
            <Booking></Booking>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
