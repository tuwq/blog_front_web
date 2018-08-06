import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import InformationNav from '../InformationNav/InformationNav'
import FollowList from '../FollowList/FollowList'
import FansList from '../FansList/FansList'
import UserInfo from '../UserInfo/UserInfo'
import DynamicReceiveList from '../DynamicReceiveList/DynamicReceiveList'
import DynamicInitiateList from '../DynamicInitiateList/DynamicInitiateList'


import './InformationContent.less'
import './MInformationContent.less'

class InformationContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.updateNavType = this.updateNavType.bind(this)
		this.state = {
			navType: 1
		}
		
	}

	componentDidMount() {
		
	}

	updateNavType(type) {
		this.setState({
			navType: type
		})
	}

	render() {
		return (
			<div className="InformationContent">
			  <InformationNav updateNavTypeFn={this.updateNavType.bind(this)} />
			  {
			  	this.state.navType==1
			  	?<UserInfo/>
			  	:this.state.navType==2
			  	?<DynamicReceiveList />
			  	:this.state.navType==3
			  	?<DynamicInitiateList />
			  	:this.state.navType==4
			  	?<FansList />
			  	:this.state.navType==5
			  	?<FollowList /> 
			  	:<div></div>
			  }
        	</div>
        )
	}
}

export default withRouter(InformationContent)


