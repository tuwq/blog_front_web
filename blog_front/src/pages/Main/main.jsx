import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import axios from 'axios'

import HomeHeader from './HomeHeader/HomeHeader'
import HomeContent from './HomeContent/HomeContent'
import HomeFooter from './HomeFooter/HomeFooter'

import './style/main.less'

class Main extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}
	render() {
		return (
			<div id="Main">
	           <HomeHeader />
	           <HomeContent />
	           <HomeFooter />
        	</div>
        )
	}
}

export default Main

