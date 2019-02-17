import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './FriendTitle.less'
import './MFriendTitle.less'

class FriendTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
	   
	}

	render() {
		return (
			<div className="FriendTitle">
				<h2>友情链接</h2>
        	</div>
        )
	}
}

export default withRouter(FriendTitle)


