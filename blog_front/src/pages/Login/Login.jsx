import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import LoginMain from '@/pages/Login/subpages/LoginMain/LoginMain'
import HomeFooter from '@/pages/Main/HomeFooter/HomeFooter'

import './Login.less'
import './MLogin.less'

class Login extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="Login" className="Login">
	           <LoginMain />
	           <HomeFooter />
        	</div>
        )
	}
}

export default withRouter(Login)


