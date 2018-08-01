import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './InformationNav.less'
import './MInformationNav.less'

class InformationNav extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	updateNavType(type,e) {
		$(e.target).addClass('current').siblings().removeClass('current')
		this.props.updateNavTypeFn(type)
	}

	render() {
		var nav = null
		if (this.props.showInfo.identity == 1) {
			nav = (
				<React.Fragment>
				<a className="current" onClick={this.updateNavType.bind(this,1)}>资料</a>
		  		<a onClick={this.updateNavType.bind(this,2)}>消息<span>4</span></a>
		  		<a onClick={this.updateNavType.bind(this,3)}>评论<span>4</span></a>
		  		<a onClick={this.updateNavType.bind(this,4)}>粉丝<span>4</span></a>
		  		<a onClick={this.updateNavType.bind(this,5)}>关注<span>4</span></a>
		  		</React.Fragment>
			)
		} else if (this.props.showInfo.identity == 2) {
			nav = (
				<React.Fragment>
				<a className="current" onClick={this.updateNavType.bind(this,1)}>资料</a>
		  		<a onClick={this.updateNavType.bind(this,3)}>评论<span>4</span></a>
		  		<a onClick={this.updateNavType.bind(this,4)}>粉丝<span>4</span></a>
		  		<a onClick={this.updateNavType.bind(this,5)}>关注<span>4</span></a>
		  		</React.Fragment>
			)
		}
		return (
			<div className="InformationNav">
			  	<nav className="nav-wrapper">
			  		{nav}
			  	</nav>
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
  connect(mapStateToProps, mapDispatchToProps)(InformationNav)
)

