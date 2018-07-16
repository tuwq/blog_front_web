import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import HomeHeader from './HomeHeader/HomeHeader'
import HomeContent from './HomeContent/HomeContent'
import HomeFooter from './HomeFooter/HomeFooter'
import FixControl from 'base/general/FixControl/FixControl'
import SearchModal from 'base/general/SearchModal/SearchModal'

import './Main.less'
import './MMain.less'

class Main extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div id="Main" className="Main">
	           <HomeHeader />
	           <HomeContent />
	           <HomeFooter />
	           <FixControl />
	           <SearchModal />
        	</div>
        )
	}
}

export default withRouter(Main)


