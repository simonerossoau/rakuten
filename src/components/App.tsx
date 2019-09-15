import * as React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../style/style.css';

//redux
import configureStore from '../redux/store/store';
import Navbar from './Nav/navbar';
import Footer from './Footer/Footer';
import Index from './Index/Index';
import MovieDetail from './MovieDetail/MovieDetail';

var store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route path="/" exact component={Index} />
          <Route path="/movies/" exact component={MovieDetail} />
          <Footer />
        </Router>
      </Provider >
    );
  }
}

//Export component
export default App;