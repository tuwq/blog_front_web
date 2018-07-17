import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import qqSvg from 'static/svg/qq.svg'

import './RegistMain.less'
import './MRegistMain.less'

class RegistMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="RegistMain" className="RegistMain">
	       		<div className="content-wrapper">
	       			<div className="content">
	       				<img alt="" src="https://ikmoe.com/logo.png"/>
	       				<form className="form">
	       					<h2 className="title">创建新账号</h2>
	       					<div className="msg">
	       						<button className="close">x</button>
	       						<ul><li>邮箱格式不正确</li></ul>
	       					</div>
	       					<p>我们将发送一封验证邮件至你的邮箱, 请正确填写以完成账号注册和激活</p>
	       					<div className="form-group">
	       						<div className="form-control"><input type="text" placeholder="账户"/></div>
	       						<div className="form-control"><input type="text" placeholder="邮箱"/></div>
	       						<div className="form-control"><input type="text" placeholder="密码"/></div>
	       						<div className="form-control validtion">
	       							<input type="text" placeholder="验证码"/>
	       							<span><img alt=""/></span>
	       						</div>
	       						<div className="form-control">
	       							<button className="regist">注册</button>
	       						</div>
	       					</div>
	       					<div className="meta">
		       					<span><a>快速登录</a></span>
		       					<span><a><img width="20" height="20" alt="" src={qqSvg}/></a></span>
		       				</div>
		       				<div className="gologin">
		       					<span>已有账号?</span>
		       					<span><a onClick={this.props.updateStatusFn}>登录</a></span>
		       				</div>
	       				</form>
	       			</div>
	       		</div>
        	</div>
        )
	}
}

export default RegistMain


