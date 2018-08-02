import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import pointSvg from 'static/svg/point.svg'

import './LinkItem.less'
import './MLinkItem.less'

class LinkItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="LinkItem">
				<h3>
					<i><img width="5" height="5" alt="" src={pointSvg}/></i>
 					<a>{this.props.item.title}</a>
 				</h3>
        	</div>
        )
	}
}

export default withRouter(LinkItem)


