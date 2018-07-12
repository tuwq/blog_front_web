import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'


import ModelMediumListTitle from '../ModelMediumListTitle/ModelMediumListTitle'
import ModelMediumList from '../ModelMediumList/ModelMediumList'
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
         		<ModelMediumListTitle />	
         		<ModelMediumList />
         	</div>
        )
	}
}

export default ModelMediumCollection

