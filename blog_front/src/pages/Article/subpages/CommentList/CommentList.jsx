import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CommentItem from '../CommentItem/CommentItem'
import Pagination from 'base/general/Pagination/Pagination'

import './CommentList.less'
import './MCommentList.less'

class CommentList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)		
	}

	componentDidMount() {
		
	}

	reply(e) {
		
	}

	render() {
		return (
			<div className="CommentList">
				<h2>8 条评论</h2>
				<div className="commentList">
					<CommentItem replyFn={this.reply.bind(this)}/>
					<CommentItem replyFn={this.reply.bind(this)}/>
					<CommentItem replyFn={this.reply.bind(this)}/>
				</div>
				<Pagination />
        	</div>
        )
	}
}

export default withRouter(CommentList)


