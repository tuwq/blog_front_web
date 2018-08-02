import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelMediumCollection from '../ModelMediumCollection/ModelMediumCollection'
import ModelShortCollection from '../ModelShortCollection/ModelShortCollection'
import ModelCrowdCollection from '../ModelCrowdCollection/ModelCrowdCollection'

import './SectionItem.less'
import './MSectionItem.less'

class SectionItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="SectionItem">
         		<ModelMediumCollection />
         		<ModelCrowdCollection />
         		<ModelShortCollection />
         	</div>
        )
	}
}

export default SectionItem

