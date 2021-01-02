import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SettingAside from '../SettingAside/SettingAside'
import SettingContent from '../SettingContent/SettingContent'

import './SettingMain.less'
import './MSettingMain.less'

class SettingMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SettingMain">
				<div className="SettingMain-Wrapper">
					<SettingAside />
					<SettingContent />
				</div>
        	</div>
        )
	}
}

export default withRouter(SettingMain)


