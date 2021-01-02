import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

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
		let prev = null
		let next = null
		if (this.props.data.prev != null) {
			prev = (<li className="next" data-tooltip={this.props.data.prev.title}>
						<Link to={'/article/'+this.props.data.prev.id}>上一篇</Link>
					</li>)
		}
		if (this.props.data.next != null) {
			next = (<li className="previous" data-tooltip={this.props.data.next.title}>
						<Link to={'/article/'+this.props.data.next.id}>下一篇</Link>
					</li>)
		}
		return (
			<div className="Choose">
				<div className="pager">
						{
							prev!=null
							?prev
							:(<li className="next" data-tooltip="这已经是第一篇了">
								<a>这已经是第一篇了</a>
							  </li>)
						}
						{
							next!=null
							?next
							:(<li className="next" data-tooltip="这已经是最后一篇了">
								<a>这已经是最后一篇了</a>
							</li>)
						}
				</div>
        	</div>
        )
	}
}

export default withRouter(Choose)


