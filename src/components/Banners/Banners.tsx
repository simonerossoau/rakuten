import * as React from 'react';
import { IBannersProps } from './IBannersProps';

class Banners extends React.Component<IBannersProps, {}>{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="section section--banners">
                <div className="banner-list">
                    {this.props.bannersData !== undefined && this.props.bannersData.map((item, index) =>
                        <div key={index} className="list__item">
                            <a className="artwork">
                                <img className="artwork__image" src={item.image} />
                            </a>
                        </div>)}
                </div>
            </div>
        )
    }
}

export default Banners