import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import './assets/css/App.css';

// importar componentes:
import Menu from './components/Menu';
import Arsat from './components/arsat';
import Clima from './components/clima';
import Jph from "./components/jsonplaceholder";

function App() {
  
  return (

	<Router>
		<main className="text-center">	  	
			<h3>☺ API-trainer</h3>
			<Menu />
			<div className="m-5">
			<Switch>
				
					<Route path="/clima">
						<Clima />
					</Route>
					<Route path="/arsat">
						<Arsat /> 
					</Route>

					<Route path="/jsonplaceholder">
						<Jph />
					</Route>
					<Route path="/">
						<h4>Elegí que API queres ver</h4>
					</Route>			
			</Switch>
			</div>
		</main>
	</Router>
  );
}

export default App;
