import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './NotFound.less'
import './MNotFound.less'

class NotFound extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="NotFound">
				<div className="message">404 NotFound</div>
        	</div>
        )
	}
}

export default withRouter(NotFound)


