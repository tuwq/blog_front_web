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

	updateNavType(type,e) {
		$(e.target).addClass('current').siblings().removeClass('current')
		this.props.updateNavTypeFn(type)
	}

	render() {
		return (
			<div className="InformationNav">
			  	<nav className="nav-wrapper">
			  		<a className="current" onClick={this.updateNavType.bind(this,1)}>资料</a>
			  		<a onClick={this.updateNavType.bind(this,2)}>消息<span>4</span></a>
			  		<a onClick={this.updateNavType.bind(this,3)}>评论<span>4</span></a>
			  		<a onClick={this.updateNavType.bind(this,4)}>粉丝<span>4</span></a>
			  		<a onClick={this.updateNavType.bind(this,5)}>关注<span>4</span></a>
			  	</nav>
        	</div>
        )
	}
}

export default withRouter(InformationNav)


