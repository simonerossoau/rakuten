import * as React from 'react';
import { connect } from 'react-redux'
import MenuItem from './menu';
import LogoItem from './logo';
import INavbarProps from './INavbarProps';
import INavbarState from './INavbarState';

function mapStateToProps(state) {
  return {
    movieId: state.movieReducer.movieDetails
  }
}

class Navbar extends React.Component<INavbarProps, INavbarState>{

  constructor(props) {
    super(props)
  }

  replaceString() {
    var str = this.props.movieId;
    str.replace("-", " ")
    return str;
  }

  render() {
    return (
      <div className="nav">
        <div className="nav__items">
          <LogoItem />
          <MenuItem />
          {this.props.movieId !== undefined &&
            <p className="title">
              {this.replaceString()}
            </p>}
        </div>
      </div>
    )

  }


}

export default connect(mapStateToProps)(Navbar)