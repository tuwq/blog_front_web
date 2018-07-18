import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SearchList from '../SearchList/SearchList'

import './SearchContent.less'
import './MSearchContent.less'

class SearchContent extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SearchContent">
			  	<SearchList />
        	</div>
        )
	}
}

export default withRouter(SearchContent)


