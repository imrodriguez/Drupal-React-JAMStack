import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './App.styles';

class App extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('App mounted');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="AppWrapper">
        Test content
      </div>
    );
  }
}

export default App;
