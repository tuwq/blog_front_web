import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SettingAside.less'
import './MSettingAside.less'

class SettingAside extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SettingAside">
				<nav className="nav">
					<div className="avatar">
						<img alt="" src="https://ikmoe.com/wp-content/uploads/avatars/190.jpg"/>
						<a>tuwenq@126.com</a>
					</div>
					<ul className="tab">
						<li className="current"><a>设置</a></li>
						<li><a>消息</a></li>
						<li><a>粉丝</a></li>
						<li><a>关注</a></li>
					</ul>
				</nav>
        	</div>
        )
	}
}

export default withRouter(SettingAside)


