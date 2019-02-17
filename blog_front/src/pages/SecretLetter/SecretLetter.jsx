import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import { checkSecretLetterForm } from 'base/js/check'
import { sendSecretLetterApi } from 'api/SecretLetter/secretLetter'

import './SecretLetter.less'

class SecretLetter extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			contact: '',
			content: '',
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

	inputChange(e) {
		const name = e.target.name
		this.setState({
			[name]: e.target.value,
			error: ''
		})
	}

	determine(e) {
		e.stopPropagation()
		e.preventDefault()
		let flag = checkSecretLetterForm(this.state)
		if (flag == true) {
			sendSecretLetterApi(this.state.contact,this.state.content,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						error: '私信已发送',
						contact: '',
						content: ''
					})
				} else if(res.data.code == RESULT_CODE.PARAM_ERROR) {
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
			<div id="SecretLetter" className="SecretLetter">
				<DocumentTitle title="私信">
				<div className="wrap">
					<div className="content">
						<h2>私信</h2>
						{
							this.state.error!=''&&
							(<p style={{color: '#e74c3c'}}>{this.state.error}</p>)
						}
						<form className="form">
							<div className="form-control">
								<input value={this.state.contact} name="contact" onChange={this.inputChange.bind(this)} type="text" placeholder="联系方式 QQ或邮箱" />
							</div>
							<div className="form-control content">
								<textarea value={this.state.content} name="content" onChange={this.inputChange.bind(this)} type="text" placeholder="私信内容"></textarea>
							</div>
							<div className="form-control">
								<button onClick={this.determine.bind(this)}>确定</button>
							</div>
						</form>
					</div>
				</div>
				</DocumentTitle>
        	</div>
        )
	}
}

export default withRouter(SecretLetter)


