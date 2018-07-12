import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './ModelShort.less'
import './MModelShort.less'

class ModelShort extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelShort">
         		
         	</div>
        )
	}
}

export default ModelShort

