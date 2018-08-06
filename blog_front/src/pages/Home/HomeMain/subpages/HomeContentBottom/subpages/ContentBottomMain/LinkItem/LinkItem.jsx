import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

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
 					<Link to={'/article/'+this.props.item.id}>{this.props.item.title}</Link>
 				</h3>
        	</div>
        )
	}
}

export default withRouter(LinkItem)


