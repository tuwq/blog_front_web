import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './PlayerSearchItem.less'

class PlayerSearchItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<li className="PlayerSearchItem">
				<span className="index">1</span>
				小林未郁 - Before my body is dry
        	</li>
        )
	}
}

export default withRouter(PlayerSearchItem)


