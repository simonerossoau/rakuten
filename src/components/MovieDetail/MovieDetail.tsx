import * as React from 'react';
import { connect } from 'react-redux';

import IMovieDetailProps from './IMovieDetailProps';
import IMovieDetailState from './IMovieDetailState';

import * as c from './../../models/constants';
import movieModel from './../../models/movieModel';

function mapStateToProps(state) {
    return {
        movieId: state.movieReducer.movieDetails
    }
}

const movie = new movieModel();

class MovieDetail extends React.Component<IMovieDetailProps, IMovieDetailState> {
    constructor(props) {
        super(props)

        this.state = {
            data: movie
        }
    }

    private getItemDetails() {

        let id = this.props.movieId;

        let fetchStr = c.proxyUrl + c.basePath + "movies/" + id + c.tailPath;

        //API call for movie detail
        fetch(fetchStr)
            .then((response) => {
                return response.json();
            })
            .then((movie) => {
                let dataMovie: movieModel = movieModel.apiToModel(movie.data)
                this.setState({ data: dataMovie });
            })
            .catch(function (err) {
                console.error(err);
            })
    }

    UNSAFE_componentWillMount() {
        this.getItemDetails();
    }



    render() {

        const imgBackground = this.state.data.images.snapshot;

        return (
            <div className="detail">
                {/* <div style={{
                    backgroundImage: `url(${this.state.data.images.snapshot})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100%'
                }}></div> */}
                <div className="detail__hero "><img className="detail__image" src={this.state.data.images.snapshot} /></div>

                <div className="detail__container">
                    <h4 className="detail__content__block__title">Descripcion: </h4>
                    <div className="detail__info">{this.state.data.plot}</div>
                    <h4 className="detail__content__block__title">Direccion y reparto</h4>
                    {this.state.data.actors.map((actor) =>
                        <p>{actor.id}</p>
                    )}
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps)(MovieDetail)