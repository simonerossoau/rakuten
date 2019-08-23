import * as React from 'react';
import ISectionTitleProps from './ISectionTitleProps';

class SectionTitle extends React.Component<ISectionTitleProps, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h2 className="section__title">
                <a className="section__title__link"
                    target="_self"
                    href={this.props.link}>{this.props.title}
                    <span className="icon__right-nav"></span>
                </a>
                <a className="section__title__link section__title__link--action"
                    target="_self"
                    href={this.props.link}>Ver todo
                <span className="icon__right-nav"></span>
                </a>
            </h2>
        )
    }
}

export default SectionTitle