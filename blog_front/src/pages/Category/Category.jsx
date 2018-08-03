import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'

import CategoryMain from './subpages/CategoryMain/CategoryMain'


import './Category.less'
import './MCategory.less'

class Category extends React.Component {

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
			<div className="Category">
			  	<CategoryMain />
        	</div>
        )
	}
}

export default withRouter(Category)


