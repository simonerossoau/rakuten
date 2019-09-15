import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../style/style.css';

//redux
import configureStore from '../redux/store/store';
import Navbar from './Nav/navbar';
import Footer from './Footer/Footer';
import Index from './Index/Index';
import MovieDetail from './MovieDetail/MovieDetail';

import ILayoutProps from './ILayoutProps';

function mapStateToProps(state) {
    return {
        movieId: state.movieReducer.movieDetails
    }
}

class Layout extends React.Component <ILayoutProps>{

    render() {
        return (
            <Router>
                <Navbar />
                <Route path="/" exact component={Index} />
                <Route path={"/movies/"} exact component={MovieDetail} />
                <Footer />
            </Router>
        );
    }
}

//Export component
export default connect(mapStateToProps)(Layout);