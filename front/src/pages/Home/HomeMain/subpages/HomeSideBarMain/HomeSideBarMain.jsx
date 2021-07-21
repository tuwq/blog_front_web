import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarSelf from './subpages/SiderBarSelf/SiderBarSelf'
import SiderContactMe from './subpages/SiderContactMe/SiderContactMe'
import SiderBarCommentCollection from './subpages/SiderBarCommentCollection/SiderBarCommentCollection'
import SiderBarHotCollection from './subpages/SiderBarHotCollection/SiderBarHotCollection'
import SiderBarSwitchCollection from './subpages/SiderBarSwitchCollection/SiderBarSwitchCollection'
import Advertisement from './subpages/Advertisement/Advertisement'

import './HomeSideBarMain.less'
import './MHomeSideBarMain.less'

class HomeSideBarMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<aside id="HomeSideBarMain" className="HomeSideBarMain">
         		{/* <SiderBarSelf /> */}
				<SiderContactMe />
         		{/* <SiderBarCommentCollection /> */}
				{/* <SiderBarSwitchCollection /> */}
				{/* <Advertisement /> */}
         	</aside>
        )
	}
}

export default HomeSideBarMain
