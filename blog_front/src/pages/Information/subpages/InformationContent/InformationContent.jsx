import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import InformationNav from '../InformationNav/InformationNav'
import FollowList from '../FollowList/FollowList'

import './InformationContent.less'
import './MInformationContent.less'

class InformationContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="InformationContent">
			  <InformationNav />
			  <FollowList />
        	</div>
        )
	}
}

export default withRouter(InformationContent)


