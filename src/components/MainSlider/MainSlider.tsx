import * as React from 'react';
import IMainSliderProps from './IMainSliderProps'
import IMainSliderState from './IMainSliderState';


class MainSlider extends React.Component<IMainSliderProps, IMainSliderState>{
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className="slider">
               {this.props.sliderData !== undefined && <div className="slider__wrapper" style={{ backgroundImage: `url(${this.props.sliderData[0].image})` }}>
                </div >}
            </div>
        )
    }
}

export default MainSlider