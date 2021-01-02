import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import UserNav from '../UserNav/UserNav'

import './SettingContent.less'
import './MSettingContent.less'

class SettingContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SettingContent">
				<div className="SettingContent-Wrapper">
					<UserNav />
				</div>
        	</div>
        )
	}
}

export default withRouter(SettingContent)


