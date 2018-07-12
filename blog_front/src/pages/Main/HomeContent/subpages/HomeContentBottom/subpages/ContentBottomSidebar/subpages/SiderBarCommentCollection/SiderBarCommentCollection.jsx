import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SiderBarCommentList from '../SiderBarCommentList/SiderBarCommentList'

import './SiderBarCommentCollection.less'
import './MSiderBarCommentCollection.less'

class SiderBarCommentCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SiderBarCommentCollection" className="SiderBarCommentCollection">
         		<h3><span>最新评论</span></h3>
         		<SiderBarCommentList />
         	</div>
        )
	}
}

export default SiderBarCommentCollection

