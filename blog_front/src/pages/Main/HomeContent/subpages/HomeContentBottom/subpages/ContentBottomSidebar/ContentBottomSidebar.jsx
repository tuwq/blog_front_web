import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarSelf from './subpages/SiderBarSelf/SiderBarSelf'
import SiderBarCommentCollection from './subpages/SiderBarCommentCollection/SiderBarCommentCollection'
import SiderBarHotCollection from './subpages/SiderBarHotCollection/SiderBarHotCollection'

import './ContentBottomSidebar.less'
import './MContentBottomSidebar.less'

class ContentBottomSidebar extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<aside id="ContentBottomSidebar" className="ContentBottomSidebar">
         		<SiderBarSelf />
         		<SiderBarCommentCollection />
         		<SiderBarHotCollection />
         	</aside>
        )
	}
}

export default ContentBottomSidebar

