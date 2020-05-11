import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';

class App extends React.Component {
  // outside render - anything that modifies state. get the data out here. click events, data
// when do i need data? on load or after an action

  componentDidMount() {
    const goats = goatData.getGoats();
    console.error('goats', goats);
  }

  render() {
    // inside the render - anything we need to modify the UI. loop over state? and loop over goats. changing what prints, calculation
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">Nice Button</button>
      </div>
    );
  }
}

export default App;
