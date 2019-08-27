import * as React from 'react';
import ISectionProps from './ISectionProps';
import ISectionState from './ISectionState';

import SectionsModel from '../../models/sectionModel';
import SectionTitle from './SectionTitle/SectionTitle';
import SectionList from './SectionList/SectionList';

class Section extends React.Component<ISectionProps, ISectionState> {

    constructor(props) {
        super(props)

        this.state = {
            position: 0,
            transition: 0
        }

        this.scroll = this.scroll.bind(this);

    }

    scroll(direction: string) {
        direction === "left" ?
            this.setState({
                position: this.state.position - 1,
                transition: this.state.transition + 88
            }) :
            this.setState({
                position: this.state.position + 1,
                transition: this.state.transition - 88
            })
    }

    render() {

        const translate = this.state.transition;

        return (<div className="section">

            <a href="" className="section-title-link">{}</a>
            <SectionTitle title={this.props.sectionData.Name} link="" />

            {this.state.position > 0 &&
                <div className="scrollable__arrow scrollable__arrow--left">
                    <div className="scrollable__arrow__item icon__left-nav"
                        onClick={() => this.scroll('left')}>&lang;</div>
                </div>}

            <SectionList contents={this.props.sectionData.Contents} translate={translate} />

            {this.state.position < 4 &&
                <div className="scrollable__arrow scrollable__arrow--right">
                    <div className="scrollable__arrow__item icon__right-nav"
                        onClick={() => this.scroll('right')}>&rang;</div>
                </div>}
            {/*             <div className="category-slider">
                <img src={this.props.sectionData.Additional_images.Header} />
            </div> */}
        </div>
        )
    }
}

export default Section
