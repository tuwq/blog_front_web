import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SettingMain from './subpages/SettingMain/SettingMain'

import './Setting.less'
import './MSetting.less'

class Setting extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="Setting" className="Setting">
				<SettingMain />
        	</div>
        )
	}
}

export default withRouter(Setting)


