import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'

import CommentItem from '../CommentItem/CommentItem'
import Pagination from 'base/general/Pagination/Pagination'

import './CommentList.less'
import './MCommentList.less'

class CommentList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.commentList = React.createRef()	
		this.artGoCommentListSubscribe = this.artGoCommentListSubscribe.bind(this)	
		PubSub.subscribe(global.artGoCommentListSubscribe,this.artGoCommentListSubscribe)
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	    PubSub.unsubscribe(this.artGoCommentListSubscribe);
	    this.setState = (state,callback)=>{
	      return
	    };
	}

	reply(e) {
		
	}

	artGoCommentListSubscribe(msg,data) {
		window.scrollTo(0,$(this.commentList.current).offset().top)
	}


	render() {
		return (
			<div className="CommentList">
				<h2>8 条评论</h2>
				<div className="commentList" ref={this.commentList}>
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


