import React, { Component } from 'react';

// components
import Homepage from './Components/pages/homepage';

// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Homepage />
      </div>
    );
  }
}

export default App;
