import React from 'react';
// import './App.css';
import Nav from './Nav';
import Home from './Home';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: '',
    }

    this.changePage = this.changePage.bind(this);

  }

  changePage(pageType) {
    // console.log('looking for', this)
    this.setState({ page: pageType })
  }

  render() {
    return (
      <div className="App">
        <Nav
          changePage={this.changePage}
        />
        <Home />
      </div>
    );
  }
}

export default App;
