import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import About from '../components/About';
import './App.css';

const partiOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 900
      }
    },
    line_linked: {
      distance: 250,
      opacity: 0.15
    },
    move: {
      direction: 'top',
      speed: 1,
      out_mode: 'out',
      attractenable: true
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      onHome: true
    }
  }

onRouteChange = (route) => {
  if (route === 'About') {
    this.setState({onHome: false})
  } else if (route === 'home') {
    this.setState({onHome: true})
  }
  this.setState({route: route});
}

  render() {
    const { onHome, route } = this.state;
    return (
      <div className="App">
        <Particles className='particle' params={partiOptions}/>
        <Navigation onHome={onHome} onRouteChange={this.onRouteChange} />
        <Logo />
        { route === 'home'
          ? <div>
              <h1>
                Hello Phat World :)
              </h1>
              <a
                className="links"
                href="https://webstorm.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                webStorm.app
              </a>
            </div>
          : <About onRouteChange={this.onRouteChange} />
        }
      </div>
    );
  }
}

export default App;