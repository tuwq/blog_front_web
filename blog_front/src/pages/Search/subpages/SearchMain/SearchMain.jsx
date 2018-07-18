import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SearchTitle from '../SearchTitle/SearchTitle'
import SearchContent from '../SearchContent/SearchContent'

import './SearchMain.less'
import './MSearchMain.less'

class SearchMain extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SearchMain">
			  	<div className="Content-Wrapper">
			  		<div className="content">
			  			<SearchTitle />
			  			<SearchContent />
			  		</div>
			  	</div>
        	</div>
        )
	}
}

export default withRouter(SearchMain)


