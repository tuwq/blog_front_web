import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import * as RESULT_CODE from 'api/Constant/resultCode'

import { checkmail } from 'base/js/check'
import { findPassApi } from 'api/Login/login'
 
import './FindPass.less'
import './MFindPass.less'

class FindPass extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state= {
			email: '',
			error: ''
		}
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	keypress(e) {
		// 选择提交
		if (e.which === 13) {
			this.findPass(e)
		}
	}

	inputChange(e) {
		const name = e.target.name
		this.setState({
			[name]: e.target.value,
			error: ''
		})
	}

	findPass(e) {
		e.stopPropagation()
		e.preventDefault()
		if(checkmail(this.state.email)) {
			findPassApi(this.state.email,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						email: '',
						error: '已经向邮箱发送了一封邮件'
					})
				} else if(res.data.code == RESULT_CODE.PARAM_ERROR){
					this.setState({
						error: res.data.msg
					})
				}
			})
		} else {
			this.setState({
				error: '邮箱格式不正确'
			})
		}	
	}

	render() {
		return (
			<div id="FindPass" className="FindPass">
				<DocumentTitle title="找回密码">
				<div className="FindPass-wrapper">
					<div className="content">
						<h2>找回密码</h2>
						<p>请输入您账户关联的邮箱</p>
						{
							this.state.error!=''&&
							(<p style={{color: '#e74c3c'}}>{this.state.error}</p>)
						}
						<form className="form">
							<div className="form-control">
								<div className="button-group">
									<input value={this.state.email} name="email" onChange={this.inputChange.bind(this)} type="text" placeholder="请填写账户邮箱" onKeyPress={this.keypress.bind(this)}/>
									<button onClick={this.findPass.bind(this)}>提交</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				</DocumentTitle>
        	</div>
        )
	}
}

export default withRouter(FindPass)


