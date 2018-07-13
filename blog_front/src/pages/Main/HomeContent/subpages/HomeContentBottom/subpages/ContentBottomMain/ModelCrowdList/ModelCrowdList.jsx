import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelCrowdBigItem from '../ModelCrowdBigItem/ModelCrowdBigItem'
import ModelCrowdItem from '../ModelCrowdItem/ModelCrowdItem'

import './ModelCrowdList.less'
import './MModelCrowdList.less'

class ModelCrowdList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelCrowdList">
         		<ModelCrowdBigItem />
         		<ModelCrowdItem />
         		<ModelCrowdItem />
         	</div>
        )
	}
}

export default ModelCrowdList

