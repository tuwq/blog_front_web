import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SearchTitle.less'
import './MSearchTitle.less'

class SearchTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SearchTitle">
			  	<h2>包含关键字 响应式的文章</h2>
			  	<h2>短代码</h2>
			  	<p>我相信所有被我遗忘的美好·一定还在这世上的某个角落
			  	<br/>也相信总有一天·走过很长的生命·遇见美好·春暖花开</p>
        	</div>
        )
	}
}

export default withRouter(SearchTitle)


