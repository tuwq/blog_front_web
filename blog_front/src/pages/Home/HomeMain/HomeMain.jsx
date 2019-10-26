import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeContentContainer from './subpages/HomeContentContainer/HomeContentContainer'
import HomeSideBarContainer from './subpages/HomeSideBarContainer/HomeSideBarContainer'

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
          	 	<HomeContentContainer />
				<HomeSideBarContainer />
          	 </div>
          </div>
        )
	}
}

export default HomeMain

