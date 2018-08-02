import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
     			<span>最新{this.props.category.name}</span>
     			<a>更多<i><img width="12" height="12" alt="" src={rightSvg} /></i></a>
     		</h2>
        )
	}
}

export default ModelMediumTitle

