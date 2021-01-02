import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// HashRouter BrowserRouter
import App from '@/App.jsx'
import HFMainRouter from './HFMainRouter'
import JustFooterRouter from './JustFooterRouter'
import NotFound from '@/pages/NotFound/NotFound'

class AppRouter extends React.Component {
	constructor(props,context) {
	  super(props,context)
	  this.state = {};
	}

	// Home -> HomeContent          // footer header control search
	// setting -> setting 			// footer header control search
	// self -> self 				// footer header control search
	// article -> article childmonent			// footer header control search 
	// search -> search 			// footer header control search
	// login -> Login 				// footer
	// find -> findpass				// footer
	// updatp -> updatep 			// footer		

	render() {
		return (
			<Router>
				<App>
					 <Switch>
						<Route path="/extra" component={JustFooterRouter} />
						<Route path="/" component={HFMainRouter} />
						<Route path="/notFound" component={NotFound}/>
						<Route path="*" component={NotFound}/>
					 </Switch>
				</App>
			</Router>
		)
	}

}

export default AppRouter