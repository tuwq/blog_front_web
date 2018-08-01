import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './SettingAside.less'
import './MSettingAside.less'

class SettingAside extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SettingAside">
				<nav className="nav">
					<div className="avatar">
						<img alt="" src={global.userAvatarPrefix+this.props.user.avatar}/>
						<a>{this.props.user.nickname}</a>
					</div>
					<ul className="tab">
						<li className="current"><a>设置</a></li>
						<li><Link to={'/user/'+this.props.user.id}>消息</Link></li>
					</ul>
				</nav>
        	</div>
        )
	}
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default withRouter(
     connect(mapStateToProps, mapDispatchToProps)(SettingAside)
)


