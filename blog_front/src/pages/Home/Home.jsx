import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import HomeContent from './HomeContent/HomeContent'

import './Home.less'
import './MHome.less'

class Home extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="Home" className="Home">
	           <HomeContent />
        	</div>
        )
	}
}

export default withRouter(Home)


