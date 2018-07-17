import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from '@/App.jsx'
import SubRouter from './SubRouter'
import UserRouter from './UserRouter'

class AppRouter extends React.Component {
	constructor(props,context) {
	  super(props,context)
	  this.state = {};
	}

	render() {
		return (
			<Router>
				<App>
					<Route path="/" component={SubRouter} />
					<Route path="/user" component={UserRouter} />
				</App>
			</Router>
		)
	}

	componentDidMount() {
 
  	}
}

export default AppRouter