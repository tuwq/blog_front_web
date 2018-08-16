import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './FirendItem.less'
import './MFirendItem.less'

class FirendItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
	   
	}

	render() {
		return (
			<a href={this.props.item.website} className="FirendItem">
			 	<div className="box">
			 		<img className="avatar" alt="" src={global.firendAvatarPrefix+this.props.item.avatar}/>
					<div className="info">
						<h4 className="name">{this.props.item.nickname}</h4>
						<p className="desc">{this.props.item.desc}</p>
					</div>
			 	</div>
        	</a>
        )
	}
}

export default withRouter(FirendItem)


