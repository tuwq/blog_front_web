import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import './SiderBarCommentItem.less'
import './MSiderBarCommentItem.less'

class SiderBarCommentItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="SiderBarCommentItem">
         		<div className="CommentTitle">	
                  <div>
                     <Link to={'/user/'+this.props.item.user.id} className="avatar">
                        <img width="20" height="20" alt="" src={global.userAvatarPrefix+this.props.item.user.avatar+'?v='+new Date().getTime()}/>
                     </Link>
                     <Link to={'/user/'+this.props.item.user.id} className="nickname">{this.props.item.user.nickname}</Link>
            			<span className="tip">&nbsp;评论于&nbsp;</span>
         			</div>
                  <Link to={'/article/'+this.props.item.article.id} className="articleName">{this.props.item.article.title}</Link>
         		</div>
         		<div className="CommentContent">
                  {this.props.item.content}
               </div>
         	</div>
        )
	}
}

export default withRouter(SiderBarCommentItem)

