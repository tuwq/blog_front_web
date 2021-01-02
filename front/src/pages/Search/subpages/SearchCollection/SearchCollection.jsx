import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import SearchList from '../SearchList/SearchList'

import './SearchCollection.less'
import './MSearchCollection.less'

class SearchCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="SearchCollection">
			  	<SearchList data={this.props.data}/>
        	</div>
        )
	}
}

export default withRouter(SearchCollection)


