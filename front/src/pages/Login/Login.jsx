import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import LoginMain from '@/pages/Login/subpages/LoginMain/LoginMain'
import RegistMain from '@/pages/Login/subpages/RegistMain/RegistMain'

import './Login.less'
import './MLogin.less'

class Login extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			status: true
		}
	}

	componentDidMount() {
		
	}

	updateStatusFn(e) {
		e.stopPropagation()
		this.setState((prevState, props)=>({
			status: !prevState.status
		}))
	}

	render() {
		return (
			<div id="Login" className="Login">
				<DocumentTitle title="注册登录">
				{	
					this.state.status
					?<LoginMain updateStatusFn={this.updateStatusFn.bind(this)}/>
					:<RegistMain updateStatusFn={this.updateStatusFn.bind(this)}/>
				}
				</DocumentTitle>
        	</div>
        )
	}
}

export default withRouter(Login)


