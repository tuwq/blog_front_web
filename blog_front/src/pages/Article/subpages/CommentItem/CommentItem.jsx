import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
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
				<a className="avatar"><img alt="" src={global.userAvatarPrefix+this.props.item.user.avatar+'?v='+new Date().getTime()}/></a>
				<div className="content-wrapper">
					<div className="meta">
						<Link to={'/user/'+this.props.item.user.id}>{this.props.item.user.nickname}</Link>
						<span>{this.props.item.timeAgo}&nbsp;{this.props.item.createTimeString}</span>
					</div>
					<div className="content">
						{this.props.item.content}
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


