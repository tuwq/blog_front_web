import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import qqSvg from 'static/svg/qq.svg'

import './LoginMain.less'
import './MLoginMain.less'

class LoginMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="LoginMain" className="LoginMain">
	       		<div className="content-wrapper">
	       			<div className="cotent">
	       				<img alt="" src="https://ikmoe.com/logo.png"/>
	       				<form className="form">
	       					<h2 className="title">创建新账号</h2>
	       					<div className="msg">
	       						<button className="close">x</button>
	       						<ul></ul>
	       					</div>
	       					<p>我们将发送一封验证邮件至你的邮箱, 请正确填写以完成账号注册和激活</p>
	       					<div className="inputs">
	       						<input type="text" />
	       						<input type="text" />
	       						<input type="text" />
	       						<div className="validation">
	       							<input type="text" />
	       							<span><img alt="" src="https://ikmoe.com/site/captcha?t=0.59507700_1531744791"/></span>
	       						</div>
	       						<input type="button" className="regist"/>
	       					</div>
	       				</form>
	       				<div className="meta">
	       					<span><a>快速登录</a></span>
	       					<span><a><img width="20" height="20" alt="" src={qqSvg}/></a></span>
	       				</div>
	       			</div>
	       		</div>
        	</div>
        )
	}
}

export default LoginMain


