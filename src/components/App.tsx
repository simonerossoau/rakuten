import * as React from 'react';

import { Provider } from 'react-redux';

import '../style/style.css';

//redux
import configureStore from '../redux/store/store';
import Layout from './Layout'

var store = configureStore();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider >
    );
  }
}

//Export component
export default App;