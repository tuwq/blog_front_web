import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as RESULT_CODE from 'api/Constant/resultCode'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'store/actions/user' 

import qqSvg from 'static/svg/qq.svg'

import { checkLoginForm } from 'base/js/check'
import { loginApi } from 'api/Login/login'
import { _setToken,_getToken } from 'base/js/cookie'

import './LoginMain.less'
import './MLoginMain.less'

class LoginMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			loginname: '',
			password: '',
			error: ''
		}
	}

	componentDidMount() {
		if(_getToken() != undefined) {
			this.props.history.replace('/')
		}
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

	login(e) {
		e.stopPropagation()
		e.preventDefault()
		var flag = checkLoginForm(this.state)
		if (flag == true) {
			loginApi(this.state,(res)=>{
				if(res.data.code==200) {
					// 存储token和userinfo
					this.props.userActions.save(res.data.result.userDto)
					_setToken(res.data.result.token)
					let to = this.props.location.state!=undefined?this.props.location.state.from:'/'
					this.props.history.replace(to)
				} else if(res.data.code == RESULT_CODE.PARAM_ERROR) {
					this.setState({
						error: res.data.msg
					})
				} else if (res.data.code == RESULT_CODE.EMAIL_MATURITY) {
					this.setState({
						loginname: '',
						password: '',
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
		let imgStyle = {
		  backgroundImage: 'url(' + this.props.imgConfig.loginImg + ')',
		};

		return (
			<div id="LoginMain" className="LoginMain" style={imgStyle}>
	          <div className="content-wrapper">
	          	<div className="content">
	          		<img alt="" src={this.props.imgConfig.logoImg}/>
	          		<form className="form">
	          			<div className="form-group">
	          				{
	       						this.state.error!=''
	       						&& (<div className="msg">
			       						<ul><li>{this.state.error}</li></ul>
			       					</div>)
	       					}
	          				<div className="form-control">
	          					<input value={this.state.loginname} name="loginname" onChange={this.inputChange.bind(this)} type="text" placeholder="邮箱或账户" autoComplete="new-password" />
	          				</div>
	          				<div className="form-control">
	          					<input value={this.state.password} name="password" onChange={this.inputChange.bind(this)} type="password" placeholder="密码" autoComplete="new-password" />
	          				</div>
	          				<div className="form-control">
       							<button className="regist" onClick={this.login.bind(this)} >登录</button>
       						</div>
	          			</div>
	       				<div className="goreigist">
	       					<span><a onClick={this.props.updateStatusFn}>现在注册</a></span>
	       					<span><Link to="/extra/findpass">忘记密码?</Link></span>
	       				</div>
	          		</form>
	          	</div>
	          </div>
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        user: state.user,
        imgConfig: state.imgConfig
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(LoginMain)
)


