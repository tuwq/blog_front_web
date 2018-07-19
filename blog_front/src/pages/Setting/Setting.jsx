import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import HomeHeader from '@/pages/Main/HomeHeader/HomeHeader'
import HomeFooter from '@/pages/Main/HomeFooter/HomeFooter'
import SettingMain from './subpages/SettingMain/SettingMain'
import FixControl from 'base/general/FixControl/FixControl'
import SearchModal from 'base/general/SearchModal/SearchModal'

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
				<HomeHeader />
				<SettingMain />
				<HomeFooter />
				<FixControl />
				<SearchModal />
        	</div>
        )
	}
}

export default withRouter(Setting)


