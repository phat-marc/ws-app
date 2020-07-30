import React from 'react';
import Card from './Card';

const About = ({ onRouteChange }) => {
	return (
		<div className="App">
        <h1>
          About this App :)
        </h1>
        <Card />
        <a
          className="links"
          href="https://webstorm.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          webStorm.app
        </a>
      </div>
	);
}

export default About;