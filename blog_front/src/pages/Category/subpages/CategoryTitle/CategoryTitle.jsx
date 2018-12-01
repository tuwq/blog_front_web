import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import './CategoryTitle.less'
import './MCategoryTitle.less'

class CategoryTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<DocumentTitle title={'纤月的'+this.props.category.name}>
				<div className="CategoryTitle">
				  	<h2>{this.props.category.name}</h2>
				  	<p>{this.props.category.desc}</p>
				  	<p>找到 {this.props.pageModel.total}个结果</p>
	        	</div>
        	</DocumentTitle>
        )
	}
}

export default withRouter(CategoryTitle)


