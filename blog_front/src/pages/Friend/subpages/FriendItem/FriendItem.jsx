import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './FriendItem.less'
import './MFriendItem.less'

class FriendItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
	   
	}

	render() {
		return (
			<a href={this.props.item.website} className="FriendItem" target="_blank">
			 	<div className="box">
			 		<img className="avatar" alt="" src={this.props.item.avatar}/>
					<div className="info">
						<h4 className="name">{this.props.item.nickname}</h4>
						<p className="desc">{this.props.item.desc}</p>
					</div>
			 	</div>
        	</a>
        )
	}
}

export default withRouter(FriendItem)


