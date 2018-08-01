import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './SelfInfo.less'
import './MSelfInfo.less'

class SelfInfo extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

	}

	componentDidMount() {
		
	}

	componentwillreceiveprops(nextProps) {
		 
	}

	render() {

		var selfInfo = null
		if (this.props.showInfo.identity == 1) {
			selfInfo = (
				<React.Fragment>
				<div className="info-group">
		  			<label className="control-label">昵称</label>
		  			<p>{this.props.showInfo.userDto.nickname}</p>
		  		</div>
		  		<div className="info-group">
		  			<label className="control-label">账户</label>
		  			<p>{this.props.showInfo.userDto.username}</p>
		  		</div>
		  		<div className="info-group">
		  			<label className="control-label">邮箱</label>
		  			<p>{this.props.showInfo.userDto.email}</p>
		  		</div>
		  		<div className="info-group">
		  			<label className="control-label">网站</label>
		  			<p>{this.props.showInfo.userDto.website}</p>
		  		</div>
		  		<div className="info-group">
		  			<label className="control-label">个人描述</label>
		  			<p>{this.props.showInfo.userDto.desc}</p>
		  		</div>
				</React.Fragment>
			)
		} else if(this.props.showInfo.identity == 2) {
			selfInfo = (
				<React.Fragment>
				<div className="info-group">
		  			<label className="control-label">昵称</label>
		  			<p>{this.props.showInfo.userDto.nickname}</p>
		  		</div>
		  		<div className="info-group">
		  			<label className="control-label">网站</label>
		  			<p>{this.props.showInfo.userDto.website}</p>
		  		</div>
		  		<div className="info-group">
		  			<label className="control-label">个人描述</label>
		  			<p>{this.props.showInfo.userDto.desc}</p>
		  		</div>
				</React.Fragment>
			)
		}
		return (
			<div className="SelfInfo">
			  <div className="wrap">
			    {
			    	this.props.identity == 1&&
			    	(
			    		<section className="card">
					  		<div className="innter">
					  			<img className="avatar" alt="" src={global.userAvatarPrefix+this.props.showInfo.userDto.avatar}/>
					  			<div className="card-text">
					  				<div>{this.props.showInfo.userDto.nickname}</div>
					  				<div>上次登录IP {this.props.showInfo.userDto.beforeLoginIp}</div>
					  				<div>本次登录IP {this.props.showInfo.userDto.nowLoginIp}</div>
					  			</div>
					  		</div>
					  	</section>
			    	)
			    }
			  	
			  	<section className="basis">
			  		<header><h2>基本信息</h2></header>
			  		{selfInfo}
			  	</section>
			  </div>
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        showInfo: state.showInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SelfInfo)
)


