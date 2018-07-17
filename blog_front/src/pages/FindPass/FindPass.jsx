import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import HomeFooter from '@/pages/Main/HomeFooter/HomeFooter'

import './FindPass.less'
import './MFindPass.less'

class FindPass extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.findPass = this.findPass.bind(this)
	}

	componentDidMount() {
		
	}

	keypress(e) {
		// 选择提交
		if (e.which === 13) {
			this.findPass()
		}
	}

	findPass() {
		
	}

	render() {
		return (
			<div id="FindPass" className="FindPass">
				<div className="FindPass-wrapper">
					<div className="content">
						<h2>找回密码</h2>
						<p>请输入您账户关联的邮箱</p>
						<p>已经向您的邮箱发送修改密码邮件</p>
						<form className="form">
							<div className="form-control">
								<div className="button-group">
									<input type="text" placeholder="请填写联系邮箱" onKeyPress={this.keypress.bind(this)}/>
									<button onClick={this.findPass}>提交</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<HomeFooter />
        	</div>
        )
	}
}

export default withRouter(FindPass)


