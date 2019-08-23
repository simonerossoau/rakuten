import * as React from 'react';

import ISectionListProps from './ISectionListProps';

import SectionItem from '../SectionItem/SectionItem'

class SectionList extends React.Component<ISectionListProps, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section section--list">
                {this.props.contents.data !== undefined && this.props.contents.data.map((element, index) =>
                    <SectionItem item={element} key={index}/>
                )}
            </div>
        )
    }
}

export default SectionList