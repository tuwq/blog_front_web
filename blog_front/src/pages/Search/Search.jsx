import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

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

	componentWillUnmount() {
	   this.setState = (state,callback)=>{
	     return
	   }
	}

	render() {
		return (
			<div className="Search">
				<DocumentTitle title="搜索文章">
					<SearchMain />
				</DocumentTitle>
        	</div>
        )
	}
}

export default withRouter(Search)


