import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from 'store/actions/user' 

import { _setToken,_getToken } from 'base/js/cookie'
import { checkLoginForm } from 'base/js/check'
import { loginApi } from 'api/Login/login'

import './CommentEditor.less'
import './MCommentEditor.less'

class CommentEditor extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.state = {
			loginname: '',
			password: '',
			content: '',
			error: '登录后才可以评论哟',
			contenterror: ''
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
			contenterror: ''
		})
	}

	login(e) {
		e.stopPropagation()
		e.preventDefault()
		var flag = checkLoginForm(this.state)
		if (flag == true) {
			loginApi(this.state,(res)=>{
				if(res.data.code==200) {
					this.props.userActions.save(res.data.result.userDto)
					_setToken(res.data.result.token)
					this.setState({
						error: '登录成功'
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

	comment(e) {
		e.stopPropagation()
		e.preventDefault()
		this.props.commentFn(this.state.content,(flag)=>{
			if (flag == true) {
				this.setState({
					content: ''
				})
			} else{
				this.setState({
					contenterror: flag
				})
			}
		})
	}

	render() {
		let token = _getToken()
		return (
			<div className="CommentEditor">
				<h4 className="title">发表评论</h4>
				<form className="form">
					{
						!token
						?(<div className="user">
							<div className="user-control">
								<input name="loginname" value={this.state.loginname} onChange={this.inputChange.bind(this)} type="text" placeholder="用户名或邮箱" />
							</div>
							<div className="user-control">
								<input name="password" value={this.state.password} onChange={this.inputChange.bind(this)} type="password" placeholder="密码" />
							</div>
							<div className="user-control">
								<button onClick={this.login.bind(this)}>登录</button>
							</div>
							<div className="user-control msg">
								<span>{this.state.error}</span>
							</div>
						</div>)
						:(
							<React.Fragment>
								<div className="form-group">
									<textarea value={this.state.content} name="content" onChange={this.inputChange.bind(this)} placeholder="说点什么吧..."></textarea>
								</div>
								<div className="form-group">
									<button onClick={this.comment.bind(this)}>发表评论</button>
									{this.state.contenterror!=''&&
										(<span className="msg">{this.state.contenterror}</span>)
									}
								</div>	
							</React.Fragment>
						)
					}
					
				</form>
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CommentEditor)
)


