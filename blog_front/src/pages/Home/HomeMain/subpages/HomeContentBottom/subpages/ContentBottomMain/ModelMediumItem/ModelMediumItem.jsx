import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './ModelMediumItem.less'
import './MModelMediumItem.less'

class ModelMediumItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelMediumItem">
         		<div className="image">
         			<a><img width="140" height="" alt="" src={global.artImgPrefix+this.props.item.faceCover}/></a>
         		</div>
         		<div className="description">
         			<div className="section-title">
         				<h3><a>{this.props.item.title}</a></h3>
         			</div>
         			<div className="section-content">
         				<p>{this.props.item.content}</p>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default ModelMediumItem

