import * as React from 'react';

import { connect } from 'react-redux';

import PageInterface from '../PageInterface';
import previewMovieModel from '../models/previewMovieModel';
import IAppState from './IAppState';

class App extends React.Component<PageInterface, IAppState> {

  constructor(props) {
    super(props)

    this.state = {
      previewMovie: new previewMovieModel(),
    }
  }

  render() {
    return (<div>
      <h1>Welcome to React with Typescript</h1>
      <p>The color of this page is: {this.props.color}</p>
    </div>
    );
  }
}

//Export component
export default App;