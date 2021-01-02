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
         			<a><img width="" height="" alt="" src="http://pcij2jrr4.bkt.clouddn.com/upload/tempitem4.png"/></a>
         		</div>
         		<div className="content">
         			<a>[软件]可能是最好用的批量打水印黑科技</a>
         		</div>
         	</div>
        )
	}
}

export default ModelCrowdItem

