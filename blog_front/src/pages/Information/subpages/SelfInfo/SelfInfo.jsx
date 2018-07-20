import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import './SelfInfo.less'
import './MSelfInfo.less'

class SelfInfo extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SelfInfo">
			  <div className="content">
			  	<section className="card">
			  		<div className="innter">
			  			<img className="avatar" alt="" src="https://ikmoe.com/wp-content/uploads/avatars/190.jpg"/>
			  			<div className="card-text">
			  				<div>tuwenq@126.com</div>
			  				<div>上次登录N/A</div>
			  				<div>本次登录IP 117.178.245.160    上次登录IP N/A</div>
			  			</div>
			  		</div>
			  	</section>
			  	<section className="basis">
			  		<header><h2>基本信息</h2></header>
			  		<div className="info-group">
			  			<label className="control-label">昵称</label>
			  			<p>tuwenq@126.com</p>
			  		</div>
			  		<div className="info-group">
			  			<label className="control-label">邮箱</label>
			  			<p>tuwenq@126.com</p>
			  		</div>
			  		<div className="info-group">
			  			<label className="control-label">网站</label>
			  			<p></p>
			  		</div>
			  		<div className="info-group">
			  			<label className="control-label">个人描述</label>
			  			<p></p>
			  		</div>
			  	</section>
			  </div>
        	</div>
        )
	}
}

export default withRouter(SelfInfo)


