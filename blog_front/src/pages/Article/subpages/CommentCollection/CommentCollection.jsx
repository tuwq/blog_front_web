import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CommentEditor from 'base/general/CommentEditor/CommentEditor'
import CommentList from '../CommentList/CommentList'

import './CommentCollection.less'
import './MCommentCollection.less'

class CommentCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="CommentCollection">
				<CommentEditor />
				<CommentList />
        	</div>
        )
	}
}

export default withRouter(CommentCollection)


