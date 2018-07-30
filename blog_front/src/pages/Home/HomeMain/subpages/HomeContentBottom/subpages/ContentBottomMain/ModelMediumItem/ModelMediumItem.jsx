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
         			<a><img width="" height="" alt="" src="http://pcij2jrr4.bkt.clouddn.com/upload/tempitem2.jpg"/></a>
         		</div>
         		<div className="description">
         			<div className="section-title">
         				<h3><a>鱼塘 使用8K分辨率逛博客是一种什么样的体验？</a></h3>
         			</div>
         			<div className="section-content">
         				<p>首先来说一下4K的分辨率，4K的分辨率为4096×2160，那么8K的分辨率呢？8K分辨率当然是翻一倍！7680x4320。然后翻一倍应该8192才对？怎么只有7680？其实这个问题很玄学，主要还是看</p>
         			</div>
         		</div>
         	</div>
        )
	}
}

export default ModelMediumItem

