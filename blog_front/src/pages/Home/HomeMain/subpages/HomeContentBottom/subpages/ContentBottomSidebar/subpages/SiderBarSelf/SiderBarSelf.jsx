import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import followSvg from 'static/svg/follow.svg'
import mailSvg from 'static/svg/mail.svg'

import './SiderBarSelf.less'
import './MSiderBarSelf.less'

class SiderBarSelf extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div id="SiderBarSelf" className="SiderBarSelf">
         		<div className="SelfBg"><a><img alt=""/></a></div>
         		<div className="SelfMsg">
         			<a className="SelfAvatar"><img alt="" src="https://ikmoe.com/wp-content/uploads/avatars/1.jpg"/></a>
         			<div className="SelfName">
         				<span>tuwq</span>
         				<span>站长</span>
         			</div>
         			<div className="SelfFllow">
         				<a>
         					<i><img alt="" width="14" height="14" src={followSvg}/></i>
         					<span>关注</span>
         				</a>
         				<a>
         					<i><img alt="" width="14" height="14" src={mailSvg}/></i>
         					<span>私信</span>
         				</a>
         			</div>
         			<div className="SelfStats">
         				<span className="stateItem">2623<span>文章</span></span>
         				<span className="stateItem">2623<span>点赞</span></span>
         				<span className="stateItem">2623<span>关注</span></span>
         				<span className="stateItem">2623<span>粉丝</span></span>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default SiderBarSelf

