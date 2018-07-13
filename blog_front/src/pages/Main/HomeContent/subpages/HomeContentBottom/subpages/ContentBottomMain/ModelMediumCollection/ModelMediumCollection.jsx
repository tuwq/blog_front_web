import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import ModelMediumTitle from 'base/general/ModelMediumTitle/ModelMediumTitle'
import ModelMediumList from '../ModelMediumList/ModelMediumList'
import ModelBigItem from '../ModelBigItem/ModelBigItem'

import rightSvg from 'static/svg/right.svg'

import './ModelMediumCollection.less'
import './MModelMediumCollection.less'

class ModelMediumCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelMediumCollection">
         		<ModelMediumTitle />	
         		<ModelBigItem />
         		<ModelMediumList />
         	</div>
        )
	}
}

export default ModelMediumCollection

