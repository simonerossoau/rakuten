import * as React from 'react';

import ISectionItemProps from './ISectionItemProps';
import ISectionItemState from './ISectionItemState';

import Tooltip from '../../Tooltip/Tooltip'
import ScoreItem from '../ScoreItem/ScoreItem'
import movieModel from './../../../models/movieModel';

import * as c from './../../../models/constants'
import { Link } from 'react-router-dom';

var movie = new movieModel();

class SectionItem extends React.Component<ISectionItemProps, ISectionItemState> {
    constructor(props) {
        super(props)

        this.state = {
            data: movie,
            isTooltipOpen: false,
            tooltipPosition: "right"
        }
        this.openTooltip = this.openTooltip.bind(this);
        this.closeTooltip = this.closeTooltip.bind(this);
    }

    private getItemDetails() {
        let type = this.props.item.type;
        let id = this.props.item.id;

        //API call for tooltip
        fetch(c.proxyUrl + c.basePath + type + "/" + id + c.tailPath)
            .then((response) => {
                return response.json();
            })
            .then((movie) => {
                let dataMovie: movieModel = movieModel.apiToModel(movie.data)
                console.log(dataMovie)
                this.setState({ data: dataMovie });
            })
            .then(() => this.setState({ isTooltipOpen: true }))
            .catch(function (err) {
                console.error(err);
            })
    }

    /* get mouse position to determinate tooltip position => helpers/mouseHelpers */

    private openTooltip() {
        //api call
        this.getItemDetails();
    }

    private closeTooltip() {
        let auxMovie: movieModel = new movieModel();

        this.setState({
            isTooltipOpen: false,
            data: auxMovie
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="list__item garden-list__item">
                    <Link to={"/movies/" + this.props.item.id}>
                    {this.state.isTooltipOpen &&
                            <Tooltip
                                movie={this.state.data}
                                backgroundImage={this.props.item.images.snapshot}
                                tooltipPosition={this.state.tooltipPosition}
                            />}
                        <div className="hoverable"
                            onMouseEnter={this.openTooltip}
                            onMouseLeave={this.closeTooltip}>
                            <a className="artwork">
                                <img className="artwork__image" src={this.props.item.images.artwork} />
                            </a>
                        </div>
                    </Link>
                    <ScoreItem />
                </div>
            </React.Fragment>
        )
    }
}

export default SectionItem