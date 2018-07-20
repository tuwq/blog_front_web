import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SearchMain from './subpages/SearchMain/SearchMain'


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
			  	<SearchMain />
        	</div>
        )
	}
}

export default withRouter(Search)


