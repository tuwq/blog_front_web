import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './ChildCommentListModal.less'
import './MChildCommentListModal.less'

class ChildCommentListModal extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="ChildCommentListModal">
				
        	</div>
        )
	}
}

export default withRouter(ChildCommentListModal)


