import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import rightSvg from 'static/svg/right.svg'

import LinkItem from '../LinkItem/LinkItem'

import './ModelShortItem.less'
import './MModelShortItem.less'

class ModelShortItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelShortItem">
         		<h2 className="ModelShortItemTitle">
	     			<span>{this.props.category.name}</span>
	     			<a>更多<i><img width="12" height="12" alt="" src={rightSvg} /></i></a>
	     		</h2>
	     		<div className="ModelShortItemLinkList">
	     			{
	     				this.props.data.map((item,index)=>{
	     					return (<LinkItem key={index} item={item} index={index}/>)
	     				})
	     			}
	     		</div>
         	</div>
        )
	}
}

export default ModelShortItem

