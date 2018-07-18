import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from '@/App.jsx'
import SubRouter from './SubRouter'
import UserRouter from './UserRouter'
import ArticleRouter from './ArticleRouter'
import SearchRouter from './SearchRouter'

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
					<Route path="/article" component={ArticleRouter} />
					<Route path="/search" component={SearchRouter} />
				</App>
			</Router>
		)
	}

}

export default AppRouter