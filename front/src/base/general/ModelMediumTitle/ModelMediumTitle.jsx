import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter,Link } from 'react-router-dom'

import rightSvg from 'static/svg/right.svg'

import './ModelMediumTitle.less'
import './MModelMediumTitle.less'

class ModelMediumTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
     		<h2 className="ModelMediumTitle">
     			<span>{this.props.category.name}</span>
     			<Link to={'/category/'+this.props.category.id}>更多<i><img width="12" height="12" alt="" src={rightSvg} /></i></Link>
     		</h2>
        )
	}
}

export default withRouter(ModelMediumTitle)

