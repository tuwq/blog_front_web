import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeContentTop from './subpages/HomeContentTop/HomeContentTop'
import HomeContentBottom from './subpages/HomeContentBottom/HomeContentBottom'

import './HomeContent.less'
import './MHomeContent.less'

class HomeContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}
	render() {
		return (
          <div id="HomeContent" className="HomeContent">
          	 <div className="HomeContent-Wrapper">
          	 	<HomeContentTop />
          	 	<HomeContentBottom />
          	 </div>
          </div>
        )
	}
}

export default HomeContent

