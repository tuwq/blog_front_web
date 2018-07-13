import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelMediumTitle from 'base/general/ModelMediumTitle/ModelMediumTitle'
import ModelCrowdList from '../ModelCrowdList/ModelCrowdList'

import './ModelCrowdCollection.less'
import './MModelCrowdCollection.less'

class ModelCrowdCollection extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelCrowdCollection">
         		<ModelMediumTitle />
         		<div className="ModelCrowdWarrper">
	         		<ModelCrowdList />
	         		<ModelCrowdList />
	         		<ModelCrowdList />
         		</div>
         	</div>
        )
	}
}

export default ModelCrowdCollection

