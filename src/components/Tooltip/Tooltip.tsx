import * as React from 'react';
import ITooltipProps from './ITooltipProps'
import ITooltipState from './ITooltipState';

class Tooltip extends React.Component<ITooltipProps, ITooltipState>{

    constructor(props) {
        super(props)

        this.state = {
        }
    }


    render() {

        const classname = "tooltip--" + this.props.tooltipPosition;

        return (
            <div className="tooltip">
                <div style={{
                    backgroundImage: `url(${this.props.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '100%'
                }}>
                    <div className={classname + " tooltip_wrapper"}>

                        <header>{this.props.movie.title}</header>
                        <div>
                            trailer
                        {/* trailer */}
                        </div>

                        <div className="Tooltip-content">
                            <div className="Tooltip-movie-attributes">
                                <p>{this.props.movie.year}</p>
                            </div>
                            <div className="Tooltip-short-plot">
                                <p>{this.props.movie.short_plot}</p>
                            </div>
                            <div className="Tooltip-price">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tooltip

