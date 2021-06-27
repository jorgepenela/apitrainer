import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';


class Menu extends React.Component{

	render(){
		return(
			<React.Fragment>
				<nav className="btn-group">
					<Link to="/" className="btn btn-primary active">Inicio</Link>
					<Link to="/arsat" className="btn btn-primary">ARSAT</Link>
					<Link to="/clima" className="btn btn-primary">Clima</Link>
					<Link to="/jsonplaceholder" className="btn btn-primary">JSONplaceholder</Link>
				</nav>
			</React.Fragment>
			
		);
	}
}

export default Menu;