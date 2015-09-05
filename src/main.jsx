/**
 * Created by hideto0710 on 9/5/15.
 */

import * as React from 'react'
import Point from './classes/point'
import NewPoint from './components/newPoint'

let point = new Point(1,70);
let newPoint = new NewPoint(1,70);

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="container">
				<header>
					<h1>Electron {point.x} {newPoint.y}</h1>
				</header>
				<section className="main"></section>
				<footer></footer>
			</div>
		);
	}
}

React.render(
	<App />,
	document.getElementById('app')
);
