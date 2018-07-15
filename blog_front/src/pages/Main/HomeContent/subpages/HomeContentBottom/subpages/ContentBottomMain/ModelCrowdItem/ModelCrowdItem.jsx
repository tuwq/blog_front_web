import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './ModelCrowdItem.less'
import './MModelCrowdItem.less'

class ModelCrowdItem extends React.Component {

	constructor(props,context) {
		super(props,context)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	componentDidMount() {
		
	}

	render() {
		return (
         	<div className="ModelCrowdItem">
         		<div className="image">
         			<a><img width="" height="" alt="" src="https://ikmoe.com/wp-content/uploads/2017/06/ikmoe_2017-06-12_09-34-27.png?imageView2/1/w/375/h/250/q/100"/></a>
         		</div>
         		<div className="content">
         			<a>[软件]可能是最好用的批量打水印黑科技</a>
         		</div>
         	</div>
        )
	}
}

export default ModelCrowdItem

