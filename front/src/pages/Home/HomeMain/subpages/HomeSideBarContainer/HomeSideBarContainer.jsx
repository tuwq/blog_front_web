import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeSideBarMain from '../HomeSideBarMain/HomeSideBarMain.jsx'

import './HomeSideBarContainer.less'
import './MHomeSideBarContainer.less'

class HomeSideBarContainer extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}
	
	render() {
		return (
          <div id="HomeSideBarContainer" className="HomeSideBarContainer">
			<HomeSideBarMain />
          </div>
        )
	}
}

export default HomeSideBarContainer

