import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

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
	          	<div className="content">
	          		<img alt="" src="https://ikmoe.com/logo.png"/>
	          		<form className="form">
	          			<div className="form-group">
	          				<div className="msg">
	       						<button className="close">x</button>
	       						<ul><li>邮箱格式不正确</li></ul>
	       					</div>
	          				<div className="form-control">
	          					<input type="text" placeholder="邮箱或用户名"/>
	          				</div>
	          				<div className="form-control">
	          					<input type="text" placeholder="密码"/>
	          				</div>
	          				<div className="form-control">
       							<button className="regist">登录</button>
       						</div>
	          			</div>
	          			<div className="meta">
	       					<span><a>快速登录</a></span>
	       					<span><a><img width="20" height="20" alt="" src={qqSvg}/></a></span>
	       				</div>
	       				<div className="goreigist">
	       					<span><a onClick={this.props.updateStatusFn}>现在注册</a></span>
	       					<span><Link to="/user/findpass">忘记密码?</Link></span>
	       				</div>
	          		</form>
	          	</div>
	          </div>
        	</div>
        )
	}
}

export default withRouter(LoginMain)


