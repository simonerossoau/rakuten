import * as React from 'react';

import ScoreItem from '../ScoreItem/ScoreItem'
import ISectionItemProps from './ISectionItemProps';

class SectionItem extends React.Component<ISectionItemProps, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <div className="list__item garden-list__item">
                    <a className="artwork">
                        <img className="artwork__image" src={this.props.item.images.artwork} />
                    </a>
                    <ScoreItem />
                </div>

                {/*    <ItemTooltip/> */}
            </React.Fragment>
        )
    }
}

export default SectionItem