import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
         			<a className="CommentAvatar">
         				<img width="20" height="20px" alt="" src="https://q.qlogo.cn/qqapp/101404562/2AD8824D7FC82F3C48BBEAE97F1F920B/100"/>
         				1839583996@qq.com
         			</a>
         			<span>评论于</span>
         			<a>求壁纸&壁纸收录情况</a>
         		</div>
         		<div className="CommentContent">
         			yes,ds
         		</div>
         	</div>
        )
	}
}

export default SiderBarCommentItem

