
import * as React from 'react'

import ApiResponse from '../components/ApiResponse'

import Point from '../classes/point'
import NewPoint from '../components/newPoint'

let point = new Point(1,70);
let newPoint = new NewPoint(1,70);

class Electron extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const token = 'xoxp-2545467001-2590832085-8204951602-d33907';
		const url = 'https://slack.com/api/channels.list';
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

export default Electron
