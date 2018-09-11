import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter,Link } from 'react-router-dom'

import './CommentItem.less'
import './MCommentItem.less'

class CommentItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	comment() {
		this.props.replyFn(this.props.item)		
	}

	render() {	
		return (
			<div className="CommentItem">
				<a className="avatar">
					<img width="40" height="40" alt="" src={global.userAvatarPrefix+this.props.item.user.avatar} />
				</a>
				<div className="content-wrapper">
					<div className="meta">
						<Link to={'/user/'+this.props.item.user.id}>{this.props.item.user.nickname}
							{
								this.props.item.user.id==1&&
								(<button className="master">博主</button>)
							}
						</Link>
						{
							this.props.item.parentUser&&
							(<Link to={'/user/'+this.props.item.parentUser.id}>&nbsp;回复&nbsp;{this.props.item.parentUser.nickname}</Link>)
						}
					</div>
					<span className="time">{this.props.item.timeAgo}&nbsp;{this.props.item.createTimeString}</span>
					<div className="content">
						{this.props.item.content}
					</div>
					<div className="reply">
						{
							this.props.item.rootComment
							?(<button className="dialog" onClick={this.comment.bind(this)}>查看对话</button>)
							:this.props.item.hasChild
							?(<button className="floor" onClick={this.comment.bind(this)}>回复楼中楼</button>)
							:(<button onClick={this.comment.bind(this)}>回复</button>)
						}	
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(CommentItem)


