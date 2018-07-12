import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelMediumItem from '../ModelMediumItem/ModelMediumItem'

import './ModelMediumList.less'
import './MModelMediumList.less'

class ModelMediumList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelMediumList">
         		<ModelMediumItem />
         		<ModelMediumItem />
         		<ModelMediumItem />
         		<ModelMediumItem />
         	</div>
        )
	}
}

export default ModelMediumList

