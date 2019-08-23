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
        }
    }

    render() {
        return (<div className="section">

            <a href="" className="section-title-link">{}</a>
            <SectionTitle title={this.props.sectionData.Name} link=""/>
            <SectionList contents={this.props.sectionData.Contents}/>
{/*             <div className="category-slider">
                <img src={this.props.sectionData.Additional_images.Header} />
            </div> */}
        </div>
        )
    }
}

export default Section
