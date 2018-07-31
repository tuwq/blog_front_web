import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import { checkUserSecuritySettingForm } from 'base/js/check'
import { userSecuritySettingApi } from 'api/User/user'

import './SecuritySetting.less'
import './MSecuritySetting.less'

class SecuritySetting extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			email: '',
			password: '',
			repassword: '',
			error: ''
		}
	}

	componentDidMount() {
		
	}

	inputChange(e) {
		const name = e.target.name
		this.setState({
			[name]: e.target.value,
			error: ''
		})
	}

	saveInfo(e) {
		e.preventDefault()
		var flag = checkUserSecuritySettingForm(this.state)
		if (flag == true) {
			userSecuritySettingApi(this.state,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						error: '修改安全信息成功'
					})
				} else {
					this.setState({
						error: res.data.msg
					})
				}
			})
		} else {
			this.setState({
				error: flag
			})
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="security">
					<form>
					<div><h2>账户安全</h2><small>谨慎操作</small></div>
					<div className="form-group">
						<label className="control-label"></label>
						<p style={{color:'#f05050'}}>{this.state.error}</p>
					</div>
					<div className="form-group">
						<label className="control-label">邮箱(必填)</label>
						<p>
							<input name="email" onChange={this.inputChange.bind(this)} type="email" placeholder="这是确认你身份的唯一方式" autoComplete="new-password"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">新密码</label>
						<p>
							<input name="password" onChange={this.inputChange.bind(this)} type="password" placeholder="如果您想修改您的密码, 请在此输入新密码, 否则请留空." autoComplete="new-password"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">重复密码</label>
						<p>
							<input name="repassword" onChange={this.inputChange.bind(this)} type="password" placeholder="再输入一遍新密码. 提示: 您的密码最好至少包含7个字符. 为了保证密码强度" autoComplete="new-password"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label"></label>
						<p>
							<button onClick={this.saveInfo.bind(this)}>保存安全信息</button>
						</p>
					</div>
					</form>
	        	</div>
        	</React.Fragment>
        )
	}
}

export default withRouter(SecuritySetting)


