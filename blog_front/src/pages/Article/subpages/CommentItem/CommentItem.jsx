import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CommentEditor from 'base/general/CommentEditor/CommentEditor'

import './CommentItem.less'
import './MCommentItem.less'

class CommentItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.updateswitch = this.updateswitch.bind(this)
		this.state = {
			editorSwitch: false
		}
	}

	componentDidMount() {
		
	}

	updateswitch(e) {
		this.setState((prevState,props)=>({
			editorSwitch: !prevState.editorSwitch
		}))
	}

	render() {	
		return (
			<div className="CommentItem">
				<div className="rootcomment">
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
							<button onClick={this.updateswitch}>回复</button>
						</div>
					</div>
				</div>
				<div className="childcomment">
					
				</div>
				{ this.state.editorSwitch && 
				( <CommentEditor switch={this.state.editorSwitch} switchFn={this.updateswitch}/> ) }
        	</div>
        )
	}
}

export default withRouter(CommentItem)


