import React from 'react';
import './App.scss';

import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/GoatCoral/GoatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }
  // outside render - anything that modifies state. get the data out here. click events, data
  // when do i need data? on load or after an action

  componentDidMount() {
    const goats = goatData.getGoats();
    // console.error('goats', goats);
    this.setState({ goats });
  }


useAGoat = (goatId) => {
  goatData.useGoat(goatId);
  const goats = goatData.getGoats();
  this.setState({ goats });
}


freeAGoat = (goatId) => {
  goatData.freeGoat(goatId);
  const goats = goatData.getGoats();
  this.setState({ goats });
}


render() {
  // inside the render - anything we need to modify the UI. loop over state? and loop over goats. changing what prints, calculation
  const { goats } = this.state;

  return (
    <div className="App">
      <h1>Goat Yoga LTD</h1>
      <GoatCoral goats={goats} useAGoat={this.useAGoat} freeAGoat={this.freeAGoat}/>
    </div>
  );
}
}

export default App;
