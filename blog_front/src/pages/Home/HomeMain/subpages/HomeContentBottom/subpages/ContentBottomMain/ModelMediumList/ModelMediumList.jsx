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
		let articleList = this.props.articleList
		return (
         	<div className="ModelMediumList">
         		{
         			articleList.map((item,index)=>{
         				return (<ModelMediumItem key={index} item={item} />)
         			})
         		}
         	</div>
        )
	}
}

export default ModelMediumList

