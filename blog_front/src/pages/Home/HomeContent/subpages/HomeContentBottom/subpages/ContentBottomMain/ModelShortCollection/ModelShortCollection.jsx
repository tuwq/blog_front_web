import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelShortList from '../ModelShortList/ModelShortList'

import './ModelShortCollection.less'
import './ModelShortCollection.less'

class ModelShortCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelShortCollection">
         		<ModelShortList />
         	</div>
        )
	}
}

export default ModelShortCollection

