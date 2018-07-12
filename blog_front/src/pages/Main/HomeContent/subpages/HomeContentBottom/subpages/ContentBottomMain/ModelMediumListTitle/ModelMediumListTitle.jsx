import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import rightSvg from 'static/svg/right.svg'

import './ModelMediumListTitle.less'
import './MModelMediumListTitle.less'

class ModelMediumListTitle extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
     		<h2 className="ModelMediumListTitle">
     			<span>最新文章</span>
     			<a>更多<i><img width="12" height="12" alt="" src={rightSvg} /></i></a>
     		</h2>
        )
	}
}

export default ModelMediumListTitle
