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
         			{
         				this.props.data.map((item,index)=>{
         					return (<ModelCrowdBigItem key={index} item={item} index={index}/>)
         				})
         			}
         	</div>
        )
	}
}

export default ModelCrowdList

