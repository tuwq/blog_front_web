import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router-dom'

import CommentItem from '../CommentItem/CommentItem'

import './CommentList.less'
import './MCommentList.less'

class CommentList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.commentListDOM = React.createRef()	
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

	replyFn(item) {
		if (item.rootComment) {
			PubSub.publish(global.childCommentSubscribe,item.rootComment);
		} else {
			PubSub.publish(global.childCommentSubscribe,item);
		}
	}

	artGoCommentListSubscribe(msg,data) {
		window.scrollTo(0,$(this.commentListDOM.current).offset().top)
	}


	render() {
		return (
			<div className="CommentList">
				<div className="commentList" ref={this.commentListDOM}>
					{
						this.props.data.map((item,index)=>{
							return (<CommentItem replyFn={this.replyFn.bind(this)} key={index} item={item} index={index}/>)
						})
					}
				</div>
        	</div>
        )
	}
}

export default withRouter(CommentList)


