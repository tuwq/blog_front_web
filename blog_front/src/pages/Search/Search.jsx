import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import HomeHeader from '@/pages/Main/HomeHeader/HomeHeader'
import HomeFooter from '@/pages/Main/HomeFooter/HomeFooter'
import SearchMain from './subpages/SearchMain/SearchMain'
import FixControl from 'base/general/FixControl/FixControl'
import SearchModal from 'base/general/SearchModal/SearchModal'


import './Search.less'
import './MSearch.less'

class Search extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="Search">
			  	<HomeHeader />
			  	<SearchMain />
			  	<HomeFooter />
			  	<FixControl />
			  	<SearchModal />
        	</div>
        )
	}
}

export default withRouter(Search)


