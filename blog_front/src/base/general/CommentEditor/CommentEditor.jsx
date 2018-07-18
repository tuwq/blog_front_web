import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './CommentEditor.less'
import './MCommentEditor.less'

class CommentEditor extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="CommentEditor">
				<h4 className="title">发表评论</h4>
				<form className="form">
					<div className="form-group">
						<textarea placeholder="说点什么吧..."></textarea>
					</div>
					<div className="user">
						<div className="user-control">
							<input type="text" placeholder="用户名或邮箱" />
						</div>
						<div className="user-control">
							<input type="text" placeholder="密码" />
						</div>
						<div className="user-control msg">
							<span>密码错误</span>
							<button>x</button>
						</div>
					</div>
					<div className="form-group">
						<button>发表评论</button>
					</div>
				</form>
        	</div>
        )
	}
}

export default withRouter(CommentEditor)


