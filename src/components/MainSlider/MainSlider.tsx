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


{/* <div className="slick-initialized slick-slider">
<button
    type="button"
    data-role="none"
    className="slick-arrow slick-prev"> Previous</button>
<div className="slick-list">
    <div
        className="slick-track"
        style={{ opacity: 1, width: "14789px" }}>
        <a className="slick-slide slider__item"
            href=""
            target="_self">
            <div
                className="slider__item__image"
                style={{ backgroundImage: `url(${this.state.imgArray[0]})` }}>
            </div>
        </a>
    </div>
</div>
<button
    type="button"
    data-role="none"
    className="slick-arrow slick-next"> Next</button>
</div> */}