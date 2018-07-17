import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './Choose.less'
import './MChoose.less'

class Choose extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	
	render() {
		return (
			<div className="Choose">
				<div className="pager">
					<li className="next" data-tooltip="javascript常用表达式"><a>上一篇</a></li>
					<li className="previous" data-tooltip="新资源"><a>下一篇</a></li>
				</div>
        	</div>
        )
	}
}

export default withRouter(Choose)


