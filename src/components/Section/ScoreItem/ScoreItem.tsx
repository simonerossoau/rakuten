import * as React from 'react';

import IScoreItemProps from './IScoreItemProps';

class ScoreItem extends React.Component<IScoreItemProps, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="score">
                <div className="score__wrapper">
                    <span className="score__rate">
                        <span className="icon__rate">
                        </span> 8.4
                    </span>
                    <span className="score__counter">
                        <span className="icon__profile">
                        </span>8,8K
                    </span>
                </div>
            </div>
        )
    }
}

export default ScoreItem