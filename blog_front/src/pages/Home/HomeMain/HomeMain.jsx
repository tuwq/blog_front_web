import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeContentTop from './subpages/HomeContentTop/HomeContentTop'
import HomeContentBottom from './subpages/HomeContentBottom/HomeContentBottom'

import './HomeMain.less'
import './MHomeMain.less'

class HomeMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
          <div id="HomeMain" className="HomeMain">
          	 <div className="HomeMain-Wrapper">
          	 	<HomeContentTop />
          	 	<HomeContentBottom />
          	 </div>
          </div>
        )
	}
}

export default HomeMain

