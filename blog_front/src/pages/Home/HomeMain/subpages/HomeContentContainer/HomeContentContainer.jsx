import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeContentTop from '@/pages/Home/HomeMain/subpages/HomeContentTop/HomeContentTop'
import HomeContentBottom from '@/pages/Home/HomeMain/subpages/HomeContentBottom/HomeContentBottom'

import './HomeContentContainer.less'
import './MHomeContentContainer.less'

class HomeContentContainer extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
          <div id="HomeContentContainer" className="HomeContentContainer">
			<HomeContentTop />
			<HomeContentBottom />
          </div>
        )
	}
}

export default HomeContentContainer

