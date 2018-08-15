import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './FirendTitle.less'
import './MFirendTitle.less'

class FirendTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
	   
	}

	render() {
		return (
			<div className="FirendTitle">
				<h2>友情链接</h2>	
				<p>连接大佬们的传送门</p>
        	</div>
        )
	}
}

export default withRouter(FirendTitle)


