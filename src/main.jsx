/**
 * Created by hideto0710 on 9/5/15.
 */

import * as React from 'react'

import ApiResponse from './components/ApiResponse'

import Point from './classes/point'
import NewPoint from './components/newPoint'

let point = new Point(1,70);
let newPoint = new NewPoint(1,70);

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const token = '<token>';
		const url = 'https://slack.com/api/channels.list?exclude_archived=random&pretty=1';
		return(
			<div className="container">
				<header>
					<h1>Electron {point.x} {newPoint.y}</h1>
					<ApiResponse url={url} token={token} />
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
