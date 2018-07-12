import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelBig from '../ModelBig/ModelBig'
import ModelMediumList from '../ModelMediumList/ModelMediumList'
import ModelShort from '../ModelShort/ModelShort'

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
         		<ModelBig />
         		<ModelMediumList />
         		<ModelShort />
         	</div>
        )
	}
}

export default SectionItem

