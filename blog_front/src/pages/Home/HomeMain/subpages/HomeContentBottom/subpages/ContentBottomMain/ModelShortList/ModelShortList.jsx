import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ModelShortItem from '../ModelShortItem/ModelShortItem'

import './ModelShortList.less'
import './MModelShortList.less'

class ModelShortList extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelShortList">
         		<ModelShortItem />
         		<ModelShortItem />
         	</div>
        )
	}
}

export default ModelShortList

