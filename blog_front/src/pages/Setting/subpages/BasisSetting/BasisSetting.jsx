import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types' 

import { checkUserBasisSettingForm } from 'base/js/check'
import { userAvatarUploadApi,userBasisSettingApi } from 'api/User/user'



import './BasisSetting.less'
import './MBasisSetting.less'

class BasisSetting extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.listenFile = this.listenFile.bind(this)
		this.listenRedux = this.listenRedux.bind(this)
		this.avatarInput = React.createRef()
		this.store = this.context.store
		this.unsubscribe = this.store.subscribe(this.listenRedux)
		this.state = {
			nickname: '',
			website: '',
			desc: '',
			avatar: '',
			avatar_file: {},
			error: ''
		}
	}

	componentDidMount() {
	  this.setState({
	  	nickname: this.props.user.nickname,
		website: this.props.user.website,
		desc: this.props.user.desc,
		avatar: global.userAvatarPrefix+this.props.user.avatar
	  })
	}

	componentWillUnmount() {
	   this.unsubscribe()
	   $(this.avatarInput.current).off('change')
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	listenRedux() {
		let reduxState = this.store.getState()
		this.setState({
			nickname: reduxState.user.nickname,
			website: reduxState.user.website,
			desc: reduxState.user.desc,
			avatar: global.userAvatarPrefix+reduxState.user.avatar
		})
	}

	inputChange(e) {
		const name = e.target.name
		this.setState({
			[name]: e.target.value
		})
	}

	listenFile() {
		$(this.avatarInput.current).on('change',()=>{
			var file = $(this.avatarInput.current)[0].files[0]
			if(file == undefined){return}
			var formdata = new FormData()
			formdata.append('avatar_file',file)
			userAvatarUploadApi(formdata,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						avatar: global.userAvatarPrefix+res.data.result,
						error: '头像修改成功'
					})
					PubSub.publish(global.userInfoRefresh,true);
				} else {
					this.setState({
						error: res.data.msg
					})
				}
			})
		})
	}

	saveInfo() {
		var flag = checkUserBasisSettingForm(this.state)
		if (flag == true) {
			userBasisSettingApi(this.state,(res)=>{
				if (res.data.code == 200) {
					this.setState({
						error: '修改信息成功'
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

	render() {
		return (
			<React.Fragment>
				<section className="basis">
					<div><h2>基本信息</h2></div>
					<div className="form-group">
						<label className="control-label"></label>
						<p style={{color:'#f05050'}}>{this.state.error}</p>
					</div>
					<div className="form-group">
						<label className="control-label">头像</label>
						<div className="radio">
							<label>
							    {
							    	JSON.stringify(this.props.user) != "{}" &&
							    	(<img width="40" height="40" alt="" src={this.state.avatar} />)
							    }
								<span><svg width="40" height="40" viewBox="-8 -8 80 80"><g>
									<path d="M10.61 44.486V23.418c0-2.798 2.198-4.757 5.052-4.757h6.405c1.142-1.915 2.123-5.161 3.055-5.138L40.28 13.5c.79 0 1.971 3.4 3.073 5.14 0 .2 6.51 0 6.51 0 2.856 0 5.136 1.965 5.136 4.757V44.47c-.006 2.803-2.28 4.997-5.137 4.997h-34.2c-2.854.018-5.052-2.184-5.052-4.981zm5.674-23.261c-1.635 0-3.063 1.406-3.063 3.016v19.764c0 1.607 1.428 2.947 3.063 2.947H49.4c1.632 0 2.987-1.355 2.987-2.957v-19.76c0-1.609-1.357-3.016-2.987-3.016h-7.898c-.627-1.625-1.909-4.937-2.28-5.148 0 0-13.19.018-13.055 0-.554.276-2.272 5.143-2.272 5.143l-7.611.01z"/>
									<path d="M32.653 41.727c-5.06 0-9.108-3.986-9.108-8.975 0-4.98 4.047-8.966 9.108-8.966 5.057 0 9.107 3.985 9.107 8.969 0 4.988-4.047 8.974-9.107 8.974v-.002zm0-15.635c-3.674 0-6.763 3.042-6.763 6.66 0 3.62 3.089 6.668 6.763 6.668 3.673 0 6.762-3.047 6.762-6.665 0-3.616-3.088-6.665-6.762-6.665v.002z"/>
								</g></svg></span>
								<span>更换头像</span>
								<input type="file" ref={this.avatarInput} style={{display:'none'}}/>
							</label>
						</div>
					</div>
					<div className="form-group">
						<label className="control-label">昵称</label>
						<p>
							<input defaultValue={this.state.nickname} name="nickname" onChange={this.inputChange.bind(this)} type="text" autoComplete="new-password"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">网站</label>
						<p>
							<input defaultValue={this.state.website} name="website" onChange={this.inputChange.bind(this)} type="text" autoComplete="new-password"/>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label">个人描述</label>
						<p>
							<textarea value={this.state.desc} name="desc" onChange={this.inputChange.bind(this)} placeholder="添加你的个人简介" autoComplete="new-password"></textarea>
						</p>
					</div>
					<div className="form-group">
						<label className="control-label"></label>
						<p>
							<button onClick={this.saveInfo.bind(this)}>保存资料</button>
						</p>
					</div>
				</section>
        	</React.Fragment>
        )
	}
}

BasisSetting.contextTypes = {
  store: PropTypes.object
}

function mapStateToProps(state) {
    return {
     // state.modal 对应的reducer注册时的名称
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(
     // 将reducer和action关联
     connect(mapStateToProps, mapDispatchToProps)(BasisSetting)
)


