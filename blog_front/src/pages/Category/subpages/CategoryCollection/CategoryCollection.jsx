import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CategoryList from '../CategoryList/CategoryList'

import './CategoryCollection.less'
import './MCategoryCollection.less'

class CategoryCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div className="CategoryCollection">
			  	<CategoryList data={this.props.data}/>
        	</div>
        )
	}
}

export default withRouter(CategoryCollection)


