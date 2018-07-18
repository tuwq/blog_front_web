import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as commentActions from 'store/actions/comment' 

import './CommentItem.less'
import './MCommentItem.less'

class CommentItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.childModal = this.childModal.bind(this)
	}

	componentDidMount() {
		
	}

	childModal(id) {
		if (this.props.isModal) {return}
		this.props.commentActions.load({
			modalStatus: true,
			cid: id
		})
	}

	render() {	
		return (
			<div className="CommentItem">
				<a className="avatar"><img alt="" src="https://q.qlogo.cn/g?b=qq&nk=1537060553&s=40"/></a>
				<div className="content-wrapper">
					<div className="meta">
						<span>秋风酱</span>
						<span>July 9th, 2018 at 08:17 am</span>
					</div>
					<div className="content">
						<span>
							<p>Java好难，学不会!
欢迎加入博客圈站长交流群，群聊号码：571334199
							</p>
						</span>
					</div>
					<div className="reply">
						<button onClick={this.childModal.bind(this,1)}>回复</button>
					</div>
				</div>
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        comment: state.comment
    }
}
function mapDispatchToProps(dispatch) {
    return {
        commentActions: bindActionCreators(commentActions, dispatch)
    }
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CommentItem)
)


