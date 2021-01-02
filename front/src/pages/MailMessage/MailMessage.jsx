import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import HomeHeader from '@/pages/Home/HomeHeader/HomeHeader'

import './MailMessage.less'

class MailMessage extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			message: ''
		}
	}

	componentDidMount() {
	   var query = queryString.parse(this.props.location.search)
	   this.setState({
	   	 message: query.message
	   })
	   if (query.flag == 1) {
	   	 setTimeout(()=>{
	   	 	this.props.history.replace('/extra/login')
	   	 },2000)
	   }
	}

	render() {
		return (
			<div className="MailMessage">
				<div className="message">{this.state.message}</div>
        	</div>
        )
	}
}

export default withRouter(MailMessage)


