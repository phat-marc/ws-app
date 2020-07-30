import React from 'react';
// A simple component with no state, so just do a pure function
const Navigation = ({ onRouteChange, onHome }) => {
		if (onHome) {
			return ( 
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('About')} className='links pa3 ma0 mr2'>About</p>
				</nav>
			);	
		} else {
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p onClick={() => onRouteChange('home')} className='links pa3 ma0 mr2'>Home</p>
				</nav>
			);
		}
}

export default Navigation;