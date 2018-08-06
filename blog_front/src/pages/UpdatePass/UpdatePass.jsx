import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { withRouter } from 'react-router-dom'

import { updatePassApi } from 'api/Login/login'

import './UpdatePass.less'
import './MUpdatePass.less'

class UpdatePass extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			password: '',
			rePassword: '',
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

	updatePass(e) {
		e.stopPropagation()
		e.preventDefault()
		if (this.state.password == this.state.rePassword) {
			updatePassApi(this.props.match.params.key,this.state.password,this.state.rePassword,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						error: '修改密码成功,1秒后跳转到登录页'
					},()=>{
						setTimeout(()=>{
					   	 	this.props.history.replace('/extra/login')
					   	},1000)
					})
				} else if(res.data.code == RESULT_CODE.PARAM_ERROR){
					this.setState({
						error: res.data.msg
					})
				}
			})
		} else {
			this.setState({
				error: '两次密码不一致'
			})
		}
	}

	render() {
		return (
			<div id="UpdatePass" className="UpdatePass">
				<div className="UpdatePass-wrapper">
					<div className="content">
						<h2>修改密码</h2>
						<p>别又把密码忘了</p>
						{
							this.state.error!=''&&
							(<p>{this.state.error}</p>)
						}
						<form className="form">
							<div className="form-control">
								<input value={this.state.password} name="password" onChange={this.inputChange.bind(this)} type="password" placeholder="新密码" />
							</div>
							<div className="form-control">
								<input value={this.state.rePassword} name="rePassword" onChange={this.inputChange.bind(this)} type="password" placeholder="确认一遍" />
							</div>
							<div className="form-control">
								<button onClick={this.updatePass.bind(this)}>确定</button>
							</div>
						</form>
					</div>
				</div>
        	</div>
        )
	}
}

export default withRouter(UpdatePass)


