import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './InformationNav.less'
import './MInformationNav.less'

class InformationNav extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="InformationNav">
			  	<nav className="nav-wrapper">
			  		<a className="current">评论<span>4</span></a>
			  		<a>消息<span>4</span></a>
			  		<a>粉丝<span>4</span></a>
			  		<a>关注<span>4</span></a>
			  	</nav>
        	</div>
        )
	}
}

export default withRouter(InformationNav)


