import React from 'react';
import Tilt from 'react-tilt';
import logo from '../logo.svg';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma2 ml4'>
			<Tilt className="Tilt pa0 br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
			 <div className="Tilt-inner">
			 	<img src={logo} className="App-logo" alt="logo" style={{ height: 100, width: 100 }} />
			 </div>
			</Tilt>
		</div>
	);
}

export default Logo;