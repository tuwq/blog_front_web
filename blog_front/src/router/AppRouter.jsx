import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from '@/pages/App.jsx'
import SubRouter from './SubRouter.jsx'

class AppRouter extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render() {
		return (
			<Router>
				<App>
					<Route path="/" component={SubRouter} />
				</App>
			</Router>
		)
	}
}

export default AppRouter